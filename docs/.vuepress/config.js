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
                        text: '导读', link: '/md/other/guide.md'
                    },
                    {
                        text: '算法', link: '/md/algorithm/开篇：拒绝盲目刷题，如何更高效的学习算法.md'
                    },
                    {
                        text: 'Java面试', link: '/md/java/说一下八种基本数据类型及其包装类吧.md'
                    },
                    {
                        text: 'Spring', link: '/md/spring/Spring容器启动流程.md'
                    },
                    {
                        text: 'Mybatis', link: '/md/mybatis/JDBC用法一览.md'
                    },
                    {
                        text: 'MQ',
                        items: [
                            {
                                text: 'RabbitMq',
                                link: '/md/rabbitmq/消息中间件的诸侯征战史.md'
                            },
                            {
                                text: 'RocketMq',
                                link: '/md/rocketmq/架构及特性一览.md'
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
                                link: '/md/other/writing.md'
                            },
                            {
                                text: 'Dubbo',
                                link: '/md/dubbo/Dubbo的前世今生.md'
                            },
                        ]
                    }
                ],
                sidebar: {
                    "/md/mybatis/": mybatis(),
                    "/md/java/": java(),
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

function java() {
    return [
        {
            title: "Java面试通关",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "说一下八种基本数据类型及其包装类吧.md",
                "说一下String StringBuffer StringBuilder的区别.md"
            ]
        }
    ]
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
                "消息中间件的诸侯征战史.md",
                "RabbitMQ的安装及图形界面的使用.md",
                "RabbitMQ最全特性一览及Java Api的使用.md",
                "RabbitMQ整合Spring Boot.md",
                "RabbitMQ如何保证消息的可靠投递.md",
                "如何处理消费过程中的重复消息.md"
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
            title: "Dubbo实战",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Dubbo的前世今生.md",
                "5分钟极速入门Dubbo使用.md",
                "如何高效的测试Dubbo接口.md",
                "微服务项目（Spring Cloud，Dubbo）如何自测.md"
            ]
        },
        {
            title: "Dubbo源码解析",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "5分钟了解 Dubbo SPI 的特性.md",
                "Dubbo SPI是如何实现 AOP，IOC，自适应，自动激活的.md",
                "基于XML配置原理解析.md",
                "基于注解配置原理解析.md",
                "Dubbo服务导出过程.md",
                "服务提供方接收请求及返回结果.md",
                "线程模型和线程池策略.md",
                "BeanFactory，封装复杂Bean的创建过程.md",
                "Dubbo服务引入过程.md",
                "服务目录和路由.md",
                "注册中心.md",
                "客户端服务调用过程.md",
                "Dubbo是如何同时支持同步调用和异步调用的.md",
                "详解集群容错和负载均衡策略.md",
                "Dubbo过滤器.md"
            ]
        },
        {
            title: "Dubbo面试",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "高频面试题汇总.md",
                "Dubbo中用到了哪些设计模式.md"
            ]
        },
        {
            title: "Dubbo生产问题",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "线程池被打满.md",
                "@Reference注入为空.md"
            ]
        },
    ]
}

function spring() {
    return [
        {
            title: "Spring IOC",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Spring容器启动流程.md",
                "Spring Bean生命周期详解（一）.md",
                "Spring Bean生命周期详解（二）.md",
                "@Resource和@Autowired有啥区别.md",
            ]
        },
        {
            title: "Spring AOP",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "详解Spring AOP的前世今生.md",
                "解析切面.md",
                "生成代理对象.md",
                "执行切面.md",
                "Spring处理循环依赖只使用二级缓存可以吗.md",
                "Spring事务实现原理.md"
            ]
        },
        {
            title: "Spring Core",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "事件实现及注意事项.md",
                "Enable**注解是如何实现的.md"
            ]
        },
        {
            title: "Spring MVC",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "你需要了解的Servlet.md",
                "基于Servlet手写一个Spirng MVC.md",
                "Spring MVC启动流程.md",
                "各种类型Handler的注册和查找.md",
                "各种类型Handler的执行.md",
                "参数解析器，简化参数取值过程.md",
                "返回值处理器，处理多种返回值类型.md",
                "异常解析器，统一处理处理请求中发生的异常.md",
                "自定义组件的注入方式有多少种.md"
            ]
        },
        {
            title: "Spring Boot",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Spring 和 Spring Boot 有哪些区别.md",
                "详解Spring Boot启动流程.md",
                "Spring Boot 自动装配是如何实现的.md",
                "Condition注解.md"
            ]
        },
    ]
}

function rocketmq() {
    return [
        {
            title: "RocketMQ",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "架构及特性一览.md",
                "如何在IDEA中调试RocketMQ源码.md",
                "NameServer是如何存路由信息的.md",
                "消息发送流程.md",
                "RocketMQ是如何存储消息的.md",
                "高性能存储策略.md",
                "同步刷盘和异步刷盘的实现.md",
                "主从同步和读写分离实现.md",
                "如何快速查找消息.md",
                "消息拉取和消费流程.md",
                "消息过滤是如何实现的.md",
                "长轮询是如何实现的.md",
                "消息消费失败后的重试逻辑.md",
                "延时消息是如何实现的.md",
                "事务消息是如何实现的.md"
            ]
        }
    ]
}

function algorithm() {
    return [
        {
            title: "开篇词",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "开篇：拒绝盲目刷题，如何更高效的学习算法.md"
            ]
        },
        {
            title: "数据结构篇",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "复杂度分析：如何进行时间复杂度和空间复杂度分析.md",
                "排序：十大经典排序算法有哪些应用.md",
                "排序：如何手写堆排序.md",
                "栈：从普通栈到单调栈.md",
                "队列：从普通队列到单调队列.md",
                "树：熟练手写树的四种遍历方式.md",
                "链表：指针操作有点乱？这些技巧要记好.md",
                "哈希：更高效的查找.md",
            ]
        },
        {
            title: "算法篇",
            collapsable: false,
            sidebarDepth: 0,
            children: [
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