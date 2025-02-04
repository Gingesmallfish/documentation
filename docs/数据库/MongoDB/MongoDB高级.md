# MongoDB排序&分页

## 明确需求

数据库，使用来存放数据的

咱们后从数据库获取数据 需要排序，多页展示如何显示？

![limit](..\MongoDB\img\20.png)

## 准备

```mariadb
use test3
db.c1.insert({_id:1,name:"a",sez:1,age:1})
db.c1.insert({_id:2,name:"b",sez:2,age:2})
db.c1.insert({_id:3,name:"c",sez:3,age:3})
db.c1.insert({_id:4,name:"d",sez:4,age:4})
db.c1.insert({_id:5,name:"f",sez:5,age:5})

db.c1.find()
```



## 排序

- 语法：db.集合名.find().sort(JSON数据)
- 说明：键-就是要排序的列/字段，值：1升序 -1降序
- 练习：年龄升序&降序

![limit](E:\学习路线\MongoDB\img\21.png)

## Limit与Skip方法

- 语法：db.集合.find().sort().skip(数字).limit(数字)
- 说明：skip跳过指定的数量（可选），limit显示查询的数量
- 练习：1-降序查询2条，2-降序跳过2条并查询2条

![limit&skip](E:\学习路线\MongoDB\img\22.png)

## 实战分页

需求：数据库1 -10 的数据，每页显示两条 ()

语法：db.集合名.find().skip().limit(2)

```mariadb
skip计算公式：（当前 - 1）* 每页显示条数

1 页	1	2	0
2 页	3	4	2
3 页 5	6	4
4 页 7	8	6
5 页 9 	10	8
```



## 小总结

db.集合名.find()

.sort({列：1/-1})排序

.skip(数字)	跳过指定数量

.limit(数字)限制查询条数

.count() 统计总数量

不够：百度或谷歌



# MongoDB聚合查询

## 明确需求

![aggregate](E:\学习路线\MongoDB\img\23.png)

思考：如何统计数据，如何实现分组统计等?

回答：通过MongoDB聚合查询



## 概念

聚合查询

顾名思义就是把数据举起来，然后统计



## 语法（略复杂

语法

```mariadb
db.集合名.aggregate([
    {管道:{表达式}}
    ...
])
```

常用管道

```mariadb
$group 将集合中的文档分组，用于统计结果
$match 过滤数据，只要输出符合条件的文档
$sort  聚和数据进一步排序
$skip  跳过指定文档数
$limit 限制集合数据返回文档数
...
```

常用表达式

```mariadb
$sum	总和	$sum:1同count表示统计
$avg	平均
$min	最小值
$max	最大值
```



## 准备

```mariadb
use.test4
db.c1.insert({_id:1,name:"a",sex:1,age:1})
db.c1.insert({_id:2,name:"a",sex:1,age:2})
db.c1.insert({_id:3,name:"b",sex:2,age:3})
db.c1.insert({_id:4,name:"c",sex:2,age:4})
db.c1.insert({_id:5,name:"d",sex:2,age:5})
```



## 练习

- 统计男生，女生的总年龄

  ```mariadb
  db.c1.aggregate([
      {
      $group:{
      	_id: "$sex",
      	rs:{$sum: "$age"}
      	}
      }
  ])
  ```

  ![aggregate](E:\学习路线\MongoDB\img\24.png)

  - 统计男生，女生的总人数

    ```mariadb
    db.c1.aggregate([
        {
        $group:{
        	_id:"sex",
        	rs:{$sum:1}
        	}
        }
    ])
    
    
    结果
    [ { _id: 'sex', rs: 5 } ]
    ```

    

- 求学生总数和平均年龄

  ```mariadb
  db.c1.aggregate([
      {
      	$group:{
      		_id: null,
      		total_num: {$sum:1},
      		total_avg: {$avg: "$age"}
      	}
      }
  ])
  
  结果
  [ { _id: null, total_num: 5, total_avg: 3 } ]
  ```

  

- 查询男生，女生人数，按人数升序

  ```mariadb
  db.c1.aggregate([
      {$group:{_id: "$sex",rs: {$sum: 1}}},
      {$sort: {rs: -1}}
  ])
  ```

  

# MongoDB优化索引

## 数据库中索引

- 说明：索引是一种排序好的便于快速查询的数据结构
- 作用：帮助数据高效的查询数据

## 数据有缺点

- 优点

  ```mariadb
  提高数据擦寻的效率，降低数据库IO成本
  通过索引的数据进行排序，降低数据排序的成本，降低CPU的消耗
  ```

- 缺点

  ```mariadb
  占用磁盘空间
  大量索引影响SQL语句效率，以为每次插入和修改数据都需要跟新索引
  ```

  

## 语法

1. 创建索引语法：db.集合名.cretadteIndex(待创建索引的列[,额外选项])

2. 参数：

   >带创建索引的列:  {键:1,...,键:-1}
   >说明：1升序-1降序,{age:1}表示创建age索引并按照升序的方式存储
   >额外选项: 设置索引的名称或者唯一的索引等

3. 删除索引语法：

   >全部删除：db.集合名.droplndexes()
   >
   >删除指定：db.集合名.dropImdex(索引名)

4. 查看索引语法 db.集合名.getIndexes()

## 练习

**准备：**向数据库中新增十万条数据

```mariadb
// 选择数据库
use test5
// 向数据库中添加数据
for(var i=0; i<100000;i++){
	db.c1.insert({'name':"aaa"+i,"age":i})
}
```

**创建普通索引**

```mariadb
需求：给name添加普通索引
练习1：给name添加普通索引，命令：
db.c1.reateIndex({name:1})  这条命名是给创建索引给name列，控制台会输出name_1

db.c1.getIndexes() 查看当前索引
```

结果

```json
[
  { v: 2, key: { _id: 1 }, name: '_id_' }, 这个key是个name设置索引，这个name索引名称，默认系统生成也可以自定义
  { v: 2, key: { name: 1 }, name: 'name_1' }
]
```

**练习1:删除name索引,命名**

```mariadb
db.c1.dropIndex({'name_1'})

db.c1.getIndexes() // 查看索引被删除的命名
```

结果

```json
{ nIndexesWas: 2, ok: 1 } 删除索引

[ { v: 2, key: { _id: 1 }, name: '_id_' } ] // 查看索引是否被删除
```

>**练习3: 给name创建索引并起名webopenfather**
>
>命令: db.c1.createIndex({name:1},{name:"webopenfather"})

**创建复合/组合索引**

>需求：给name和age添加组合索引
>
>说明：就是一次性给两个字段建立索引
>
>语法：db.c1.集合名.createIndex({键1:方式,键2:方式})

**创建唯一索引**

>需求：给name添加普通索引
>
>语法：db.集合名.createIndex(待添加索引的列, {unique: 列明})
>
>练习1：删除全部索引，命名，db.c1.dropIndexes()
>
>练习2：设置唯一索引，命名：db.c1.createIndex({name:1},{unique:"name"})



## 分析索引 （explain）

- 语法: db.集合名.find().explain('')

- 说明：

  - COLLSCAN全表扫描
  - IXSCAN索引扫描
  - FETCH 根据索引去检查指定的document

- 练习

  >测试：age未添加索引情况
  >
  >语法：db.c1.find({age: 18}).explain('executionStats')
  >
  >测试：age添加索引情况
  >
  >语法：db.c1.createIndex({age: 1})
  >
  >继续测试：db.c1.find({age: 18}).explain('executionStats')

  

## 选择规则（如何选择合适的列创建索引）

>-为常做条件，排序，分组，联合操作的字段给建立索引
>
>-选择唯一索引																				(ps.同值较少如性别的字段)
>
>-选择较小的数据列，为较小的字符串使用前缀为索引		(ps.索引文件更小)



# MongoDB权限机制

## 明确需求

发现我们再DOS窗口直接输入ml就可以登录数据库

这在实战工作中绝对不允许的

思考如何xin解决

回答：使用权限机制，开启验证码模式即可

## 语法(难度⭐⭐)

```mariadb
db.createUser({
   	"user": "账号",
    "pwd":"密码",
    "roles": [{
    	role: "角色",
        db:"数据库"       
    }]          
})
```

**角色**

># 角色种类
>
>超级用户角色：root
>
>数据库用户角色：read, readWrite
>
>数据库管理角色：dbAdmin，userAdmin
>
>集群管理角色：clusterAdmin, clusterManager, clusterMonitor,hostManager;
>
>备份恢复角色：backup restore
>
>所有数据库角色：readAnyDatabase, readWriteAndDatabase, userAdminAnyDatabase,dbAdminAnyDatabas
>
>#  角色说明
>
>root: 只在admin数据库中可用，超级账号，超级权限
>
>read: 允许用户读写指定的数据库
>
>dbWrite：允许用户读写指定的数据库
>
>dbAdmin: 允许用户在指定的数据库中执行管理函数，如索引创建，删除，查看统计或者访问system.profile
>
>dbAdminAnyDatabase: 只在admin数据库中可用，赋予用户所有数据库中的dbAdmin权限

## 开启验证模式

### 开启验证模式概念：名词，指用户需要输入账号才能登录使用

### 操作步骤

>1. 添加超级管理员
>2. 退出卸载服务
>3. 重新安装需要输入账号密码的服务 (注在原安装命令基础上加上--auth即可)
>4. 启动服务-> 登录测试

### 步骤1：添加超级管理员

>mongosh
>
>```mariadb
>use admin
>
>db.createUser({
>   	"user": "admin",
>    "pwd":"admin888",
>    "roles": [{
>    	role: "root",
>        db:"admin"       
>    }]          
>})
>```
>
>脚下留心：2.x 3.x 4.x前面版本默认是看不到admin没关系，你直接选中即可

### 步骤2：退出卸载卸载服务

>```
>bin\mongod --remove
>```
>
>脚下留心：DOS窗口必须用管理员省份运行
>
>![remove](E:\学习路线\MongoDB\img\25.png)

### 步骤3：安装需要省份验证码的：MongoDB服务

>```
>bin\mongod --install --dbpath D:\mongodb\data --logpath D:\mongodb\logs\mongodb2.log --auth
>```
>
>![auth](E:\学习路线\MongoDB\img\26.png)

## 通过超级管理员账号登录

- 方法1: mongosh服务器 **ip** 地址: 端口/数据库-u 用户名-p密码

  >![lochost](E:\学习路线\MongoDB\img\27.png)

- 方法2: a-先登录，b-选择登录数据库, c-输入db.auth(用户名,密码)

  >
  >
  >![auth](E:\学习路线\MongoDB\img\28.png)



## 练习

- **需求**

  >添加用户shop1可以读shop数据库
  >
  >添加用户shop2可以读写shop的数据库
  >
  >脚下留心：必须在对应数据库创建用户

- **准备：创建测试数据和测试用户，（注意：选择shop厂库创建用户）**

  >```mariadb
  >use shop
  >
  >for(var i=1; i<=10; i++){
  >	db.goods.insert({"name":"goodsName"+i,"price":i})
  >}
  >```

- **添加用户并设置权限**

  >```mariadb
  >//切记
  >use shop
  >
  >// shop1
  >db.createUser({
  >   	"user": "shop1",
  >    "pwd":"admin888",
  >    "roles": [{
  >    	role: "read",
  >        db:"shop"       
  >    }]          
  >})
  >
  >// shop2
  >db.createUser({
  >   	"user": "shop2",
  >    "pwd":"admin888",
  >    "roles": [{
  >    	role: "readWrite",
  >        db:"shop"       
  >    }]          
  >})
  >
  >
  >```

- **验证shop1可读**

  >![shop1](E:\学习路线\MongoDB\img\29.png)

- 验证shop2可读可写

  >![shop2](E:\学习路线\MongoDB\img\30.png)