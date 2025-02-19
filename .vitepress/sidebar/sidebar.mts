import type {SidebarConfig} from '../Types/sidebarNavTypes';

const sidebar: SidebarConfig = {
    '/博客搭建/VitePress/': [{
        text: '文章目录',
        collapsed: false,
        items: [
            { text: '前言', link: '/博客搭建/VitePress/01.前言' },
            { text: '创建项目', link: '/博客搭建/VitePress/02.创建项目' },
            { text: '自定义配置', link: '/博客搭建/VitePress/03.自定义配置' },
        ]
    }, {
        text: '主题优化',
        collapsed: false,
        items: [
            { text: '美化主页', link: '/博客搭建/VitePress/04.美化主页' },
            { text: '主页扩展', link: '/博客搭建/VitePress/05.主页扩展' },
            { text: '美化文章', link: '/博客搭建/VitePress/06.美化文章' },
            { text: '文章页扩展', link: '/博客搭建/VitePress/07.文章页扩展' },
            { text: '美化地址栏icon', link: '/博客搭建/VitePress/08.美化地址栏icon' },
            { text: '设置搜索栏', link: '/博客搭建/VitePress/09.设置搜索栏' },
        ]
    }, {
        text: 'Github Pages部署',
        collapsed: false,
        items: [
            { text: '使用Github Pages部署', link: '/博客搭建/VitePress/使用Github Pages部署' },
            { text: '补充', link: '/博客搭建/VitePress/补充' },
        ]
    }],

    '/基础知识/html/': [{
        text: 'HTML',
        collapsed: false,
        items: [
            { text: '基础知识', link: '/基础知识/html/01.基础知识' },
            { text: '页面结构', link: '/基础知识/html/02.页面结构' },
            { text: '文本相关', link: '/基础知识/html/04.文本相关' },
        ]
    }, {
        text: 'from',
        collapsed: false,
        items: [
            { text: '链接与图片', link: '/基础知识/html/03.链接与图片.md' },
            { text: '表单与列表', link: '/基础知识/html/05.表单与列表' },
            { text: '表格与多媒体', link: '/基础知识/html/06.表格与多媒体' }
        ]
    }],
    '/基础知识/CSS/': [{
        text: 'CSS',
        collapsed: false,
        items: [
            { text: 'css基础', link: '/基础知识/CSS/01.css基础' }
        ]
    }, {
        text: 'css进阶',
        collapsed: false,
        items: [
            { text: 'css进阶', link: '/基础知识/CSS/02.css进阶' },
            { text: 'css盒子模型', link: '/基础知识/CSS/03.css盒子模型' },
            { text: 'css布局', link: '/基础知识/CSS/04.Flex布局' },
        ]
    }, {
        text: "css高级",
        collapsed: false,
        items: [
            { text: "css高级", link: "/基础知识/CSS/05.css高级" },
        ]

    },
        {
            text: "动画加移动端",
            collapsed: false,
            items: [
                {text: "动画", link: "/基础知识/CSS/Phon/06.动画基础"},
                {text: "空间转换", link: "/基础知识/CSS/Phon/07.空间转换"},
                {text: "rem基础", link: "/基础知识/CSS/Phon/08.rem基础",},
                {text: "vm和rem", link: "/基础知识/CSS/Phon/09.vm和rem"},
                {text: "媒体查询", link: "/基础知识/CSS/Phon/10.媒体查询"},
            ],
        },
        {
            text: "项目",
            collapsed: false,
            items: [
                {text: "学成在线项目", link: "/基础知识/CSS/学成在线项目"},
                {text: "小兔鲜项目", link: "/基础知识/CSS/小兔鲜头部页脚"},
                {text: "小兔鲜中心区域", link: "/基础知识/CSS/小兔鲜中心区域"},
            ]
        }
    ],
    '/基础知识/JS/': [
        {
            text: 'JavaScript教程',
            items: [
                {text: '简介', link: '/基础知识/JS/介绍'},
                {text: '语法', link: '/基础知识/JS/语法'},

            ]
        },
        {
            text: '数据类型',
            items: [
                {text: '数据类型', link: '/基础知识/JS/数据结构'},
            ]
        },
        {
            text: 'condition',
            items: [
                {text: 'if语句', link: '/基础知识/JS/condition/if语句'},
            ]
        }
    ],

    '/Node/': [{
        text: 'Node教程',
        collapsed: true,
        items: [
            { text: '简介', link: '/Node/01.介绍' },
        ]
    }],

    '/数据库/MongoDB/': [{
        text: 'MongoDB教程',
        collapsed: true,
        items: [
            { text: 'MongoDB学习' ,link: '/数据库/MongoDB/MongoDB学习' }
        ]
    }],

    '/工具/Git/': [{
        text: 'Git代码提交规范',
        collapsed: true,
        items: [
            { text: 'git', link: '/工具/Git/git代码提交规范' }
        ]
    }]

}
export default sidebar
