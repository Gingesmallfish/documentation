import { defineConfig} from 'vitepress'
import  Nav from './navbar/navbar.mts';
import  sidebarNavItem from './sidebar/sidebar.mts';
import markdownItVideo from "@vrcd-community/markdown-it-video";
export default defineConfig({
    base: "/documentation/",
    lang: 'zh-CN',
    title: "在线文档",
    description: "在线文档，Vue.JS,React Webpack JavaScript CSS html",
    srcDir: 'docs',
    // 最后的跟新的时间

    //  添加字体
    head: [
        ["link", { rel: "icon", href: "/public/icon.png" }],

        // 谷歌字体
        [
            'link',
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
        ],
    ],

    // 代码高亮
    markdown: {
        image: {
            lazyLoading: false
        },
        config: (md) => {
            md.use(markdownItVideo, {
                bilibili: {width: '100%', height: '387px'}
            })
        },


    },

    // 主题配置
    themeConfig: {

        outlineTitle: '文章目录',
        logo: '/logo.png',
        editLink: {
            // 这里是自己的厂库
            pattern: 'https://github.com/Gingesmallfish/Gingesmallfish.github.io',
            text: '在 GitHub 上编辑此页'
        },

        // 最后跟新时间
        lastUpdated: {
            text: '最后更新时间',
        },
        // 导航栏
        nav: Nav as any,

        // 侧边栏
        sidebar: sidebarNavItem as any,

        // 设置搜索框的样式
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        },

        // 首页页脚
        footer: {
            copyright: '姜小鱼版权所有 © 2023-2024 创作不易请尊重他人劳动成果，未经授权禁止转载！',
        },
    },

})
