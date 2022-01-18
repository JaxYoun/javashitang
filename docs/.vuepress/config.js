module.exports = {
    dest: "site",
    title: 'Java识堂', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'Java识堂', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link',
            { rel: 'icon', href: '/egg.png' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],
    ],
    themeConfig: {
        docsRepo: "erlieStar/javashitang",
        // 编辑文档的所在目录
        docsDir: 'docs',
        // 文档放在一个特定的分支下：
        docsBranch: 'master',
        //logo: "/logo.png",
        editLinks: true,
        sidebarDepth: 0,
        //smoothScroll: true,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: '导读', link: '/md/other/guide-to-reading.md'
                    },
                    {
                        text: 'Java', link: ''
                    },
                    {
                        text: 'Spring', link: ''
                    },
                    {
                        text: 'Mybatis', link: '/md/mybatis/01.JDBC用法一览.md'
                    },
                    {
                        text: 'RabbitMq', link: '/md/rabbitmq/01.消息中间件的诸侯征战史.md'
                    },
                    {
                        text: '分布式事务',
                        items: [
                            {
                                text: '解决方案',
                                link: '/md/transaction/01.7种常见解决方案汇总.md'
                            },
                            {
                                text: 'seata',
                                link: '/md/seata/01.seata和spring是如何整合的.md'
                            },
                        ]
                    }
                ],
                sidebar: {
                    "/md/mybatis/": mybatis(),
                    "/md/dubbo/": dubbo(),
                    "/md/spring/": spring(),
                    "/md/rocketmq/": rocketmq(),
                    "/md/algorithm/": algorithm(),
                    "/md/rabbitmq/": rabbitmq(),
                    "/md/transaction/": transaction(),
                    "/md/seata/": seata()
                }
            }
        }
    }
}

function mybatis() {
    return [
        {
            title: "Mybatis",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "01.JDBC用法一览.md",
                "02.MyBatis用法一览.md",
                "03.聊聊那些实用的工具类.md",
                "04.配置解析流程.md",
                "05.SQL解析流程.md",
                "06.SQL执行流程.md",
                "07.为什么一级缓存和二级缓存都不建议使用.md",
                "08.参数处理器是如何兼容这么多种类型的参数.md",
                "09.动态代理让sql执行更安全高效.md",
                "10.强大的插件是如何工作的.md",
                "11.Mybatis如何和Spring进行整合.md",
                "12.事务管理.md",
                "13.Mybatis是如何兼容这么多日志框架的.md"
            ]
        }
    ]
}

function rabbitmq() {
    return [
        {
            title: "RabbitMq",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "01.消息中间件的诸侯征战史.md",
                "02.RabbitMQ的安装及图形界面的使用.md",
                "03.RabbitMQ最全特性一览及Java Api的使用.md",
                "04.RabbitMQ整合Spring Boot.md",
                "05.RabbitMQ如何保证消息的可靠投递.md",
                "06.如何处理消费过程中的重复消息.md"
            ]
        }
    ]
}

function transaction() {
    return [
        {
            title: "分布式事务解决方案",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "01.7种常见解决方案汇总.md",
                "02.XA规范.md",
                "03.Seata AT模式.md",
                "04.TCC设计思想及其可能遇到的问题.md",
                "05.Seata TCC 模式.md",
                "06.RocketMQ事务消息.md",
            ]
        }
    ]
}

function seata() {
    return [
        {
            title: "seata源码解析",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "01.seata和spring是如何整合的.md",
                "02.只需一个注解就能开启分布式事务.md",
                "03.TM RM 客户端的初始化过程.md",
                "04.全局事务id是如何传递的.md",
                "05.seata-server启动时都做了哪些操作.md",
                "06.seata server各种消息处理流程.md",
                "07.事务状态及全局锁的存储.md",
                "08.分支事务的提交或回滚.md",
                "09.seata AT模式是如何实现的.md",
                "10.seata是如何支持TCC模式的.md"
            ]
        }
    ]
}

function dubbo() {
    return [
        {
            title: "Mybatis",
            collapsable: false,
            sidebarDepth: 0,
            children: [
            ]
        }
    ]
}

function spring() {
    return [
        {
            title: "Mybatis",
            collapsable: false,
            sidebarDepth: 0,
            children: [
            ]
        }
    ]
}

function rocketmq() {
    return [
        {
            title: "Mybatis",
            collapsable: false,
            sidebarDepth: 0,
            children: [
            ]
        }
    ]
}

function algorithm() {
    return [
        {
            title: "Mybatis",
            collapsable: false,
            sidebarDepth: 0,
            children: [
            ]
        }
    ]
}