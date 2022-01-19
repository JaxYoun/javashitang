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
                        text: '算法', link: '/md/algorithm/开篇：拒绝盲目刷题，如何更高效的学习算法.md'
                    },
                    {
                        text: 'Java', link: ''
                    },
                    {
                        text: 'Spring', link: ''
                    },
                    {
                        text: 'Mybatis', link: '/md/mybatis/JDBC用法一览.md'
                    },
                    {
                        text: 'mq',
                        items: [
                            {
                                text: 'RabbitMq',
                                link: '/md/rabbitmq/01.消息中间件的诸侯征战史.md'
                            },
                            {
                                text: 'RocketMq',
                                link: '/md/seata/01.seata和spring是如何整合的.md'
                            },
                        ]

                    },
                    {
                        text: '分布式事务',
                        items: [
                            {
                                text: '解决方案',
                                link: '/md/transaction/01.7种常见解决方案汇总.md'
                            },
                            {
                                text: 'Seata',
                                link: '/md/seata/01.seata和spring是如何整合的.md'
                            },
                        ]
                    },
                    {
                        text: 'RPC',
                        items: [
                            {
                                text: '手写RPC',
                                link: '/md/transaction/01.7种常见解决方案汇总.md'
                            },
                            {
                                text: 'Dubbo',
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
                    "/md/seata/": seata(),
                    "/md/algorightm": algorithm()
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
                "JDBC用法一览.md",
                "MyBatis用法一览.md",
                "聊聊那些实用的工具类.md",
                "配置解析流程.md",
                "SQL解析流程.md",
                "SQL执行流程.md",
                "为什么一级缓存和二级缓存都不建议使用.md",
                "参数处理器是如何兼容这么多种类型的参数.md",
                "动态代理让sql执行更安全高效.md",
                "强大的插件是如何工作的.md",
                "Mybatis如何和Spring进行整合.md",
                "事务管理.md",
                "Mybatis是如何兼容这么多日志框架的.md"
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
            title: "算法",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "开篇：拒绝盲目刷题，如何更高效的学习算法.md",
                "复杂度分析：如何进行时间复杂度和空间复杂度分析.md",
                "排序：十大经典排序算法有哪些应用.md",
                "排序：如何手写堆排序.md",
                "栈：从普通栈到单调栈.md",
                "队列：从普通队列到单调队列.md",
                "树：熟练手写树的四种遍历方式.md",
                "链表：指针操作有点乱？这些技巧要记好.md",
                "哈希：更高效的查找.md",
                "位操作：省时间，省空间，提效率.md",
                "递推和递归：一个自下而上，一个自上而下.md",
                "贪心：每次都选局部最优解.md",
                "二分查找：如何优雅的确定搜索区间.md",
                "回溯：就是一个遍历决策树的过程.md",
                "搜索：DFS和BFS遍历图的方式有哪些不同.md",
                "动态规划：更高效的穷举.md",
            ]
        }
    ]
}