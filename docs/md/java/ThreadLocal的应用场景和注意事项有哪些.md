---
layout: post
title: ThreadLocal的应用场景和注意事项有哪些？
lock: need
---

# 面试官：ThreadLocal的应用场景和注意事项有哪些？

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200405103643111.jpg?)
## 前言
ThreadLocal主要有如下2个作用

1. 保证线程安全
2. 在线程级别传递变量

## 保证线程安全
最近一个小伙伴把项目中封装的日期工具类用在多线程环境下居然出了问题，来看看怎么回事吧

日期转换的一个工具类
```java
public class DateUtil {

    private static final SimpleDateFormat sdf = 
            new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public static Date parse(String dateStr) {
        Date date = null;
        try {
            date = sdf.parse(dateStr);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }
}
```
然后将这个工具类用在多线程环境下

```java
public static void main(String[] args) {

    ExecutorService service = Executors.newFixedThreadPool(20);

    for (int i = 0; i < 20; i++) {
        service.execute(()->{
            System.out.println(DateUtil.parse("2019-06-01 16:34:30"));
        });
    }
    service.shutdown();
}
```
结果报异常了，因为部分线程获取的时间不对![在这里插入图片描述](https://img-blog.csdnimg.cn/20190601173342951.PNG?)

那么我们如何解决这个问题呢？

### 解决方案
**解决方案1：每次来都new新的，空间浪费比较大**

```java
public class DateUtil {

    public static Date parse(String dateStr) {
        SimpleDateFormat sdf =
                new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = null;
        try {
            date = sdf.parse(dateStr);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }
}
```
**解决方案2：方法用synchronized修饰，并发上不来**
```java
public class DateUtil {

    private static final SimpleDateFormat sdf =
            new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public static synchronized Date parse(String dateStr) {
        Date date = null;
        try {
            date = sdf.parse(dateStr);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }
}
```
**解决方案3：用jdk1.8中的日期格式类DateFormatter，DateTimeFormatter**

```java
public class DateUtil {

    private static DateTimeFormatter formatter = 
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    public static LocalDateTime parse(String dateStr) {
        return LocalDateTime.parse(dateStr, formatter);
    }
}
```

**解决方案4：用ThreadLocal，一个线程一个SimpleDateFormat对象**

```java
public class DateUtil {

    private static ThreadLocal<DateFormat> threadLocal = ThreadLocal.withInitial(
            ()-> new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));

    public static Date parse(String dateStr) {
        Date date = null;
        try {
            date = threadLocal.get().parse(dateStr);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }
}
```

现在这个工具类能正常使用了，这是为啥呢？
### 原理分析
当多个线程同时读写同一共享变量时存在并发问题，如果不共享不就没有并发问题了，一个线程存一个自己的变量，类比原来好几个人玩同一个球，现在一个人一个球，就没有问题了，如何把变量存在线程上呢？其实Thread类内部已经有一个Map容器用来存变量了。它的大概结构如下所示

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190601205504532.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3p6dGlfZXJsaWU=,size_16,color_FFFFFF,t_70)
ThreadLocalMap是一个Map，key是ThreadLocal，value是Object

映射到源码就是如下所示：
ThreadLocalMap是ThreadLocal的一个静态内部类
```java
public class Thread implements Runnable {
    ThreadLocal.ThreadLocalMap threadLocals = null;
}
```
往ThreadLocalMap里面放值 
```java
// ThreadLocal类里面的方法，将源码整合了一下
public void set(T value) {
    Thread t = Thread.currentThread();
    ThreadLocalMap map = t.threadLocals;
    if (map != null)
        map.set(this, value);
    else
		t.threadLocals = new ThreadLocalMap(this, firstValue);
}
```
从ThreadLocalMap里面取值


```java
// ThreadLocal类里面的方法，将源码整合了一下
public T get() {
	Thread t = Thread.currentThread();
	ThreadLocalMap map = t.threadLocals；
	if (map != null) {
		ThreadLocalMap.Entry e = map.getEntry(this);
		if (e != null) {
			@SuppressWarnings("unchecked")
			T result = (T)e.value;
			return result;
		}
	}
	return setInitialValue();
}
```
从ThreadLocalMap里面删除值

```java
// ThreadLocal类里面的方法，将源码整合了一下
public void remove() {
	ThreadLocalMap m = Thread.currentThread().threadLocals;
	if (m != null)
		m.remove(this);
}
```

执行如下代码

```java
public class InfoUtil {

    private static ThreadLocal<String> nameInfo = new ThreadLocal<>();
    private static ThreadLocal<Integer> ageInfo = new ThreadLocal<>();

    public static void setInfo(String name, Integer age) {
        nameInfo.set(name);
        ageInfo.set(age);
    }

    public static String getName() {
        return nameInfo.get();
    }

    public static void main(String[] args) {
        new Thread(() -> {
            InfoUtil.setInfo("张三", 10);
            // 张三
            System.out.println(InfoUtil.getName());
        }, "thread1").start();
        new Thread(() -> {
            InfoUtil.setInfo("李四", 20);
            // 李四
            System.out.println(InfoUtil.getName());
        }, "thread2").start();
    }
}
```
变量的结构如下图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200405101847703.png?)
## 在线程级别传递变量
假设有如下一个场景，method1()调用method2()，method2()调用method3()，method3()调用method4()，method1()生成了一个变量想在method4()中使用，有如下2种解决办法

1. method 2 3 4的参数列表上都写上method4想要的变量
2. method 1 往ThreadLocal中put一个值，method4从ThreadLocal中get出来

哪种实现方式比较优雅呢？相信我不说你也能明白了

我在生产环境中一般是这样用的，如果一个请求在系统中的处理流程比较长，可以对请求的日志打一个相同的前缀，这样比较方便处理问题

这个前缀的生成和移除可以配置在拦截器中，切面中，当然也可以在一个方法的前后

```java
public class Main {

    public static final ThreadLocal<String> SPANID =
            ThreadLocal.withInitial(() -> UUID.randomUUID().toString());

    public static void start() {
        SPANID.set(UUID.randomUUID().toString());
        // 方法调用过程中可以在日志中打印SPANID表明一个请求的执行链路
        SPANID.remove();
    }
}
```
当然Spring Cloud已经有现成的链路追踪组件了。
## ThreadLocal使用注意事项
ThreadLocal如果使用不当会造成如下问题
1. 脏数据
2. 内存泄露

### 脏数据
线程复用会造成脏数据。由于线程池会复用Thread对象，因此Thread类的成员变量threadLocals也会被复用。如果在线程的run()方法中不显示调用remove()清理与线程相关的ThreadLocal信息，并且下一个线程不调用set()设置初始值，就可能get()到上个线程设置的值
### 内存泄露

```java
static class ThreadLocalMap {

	static class Entry extends WeakReference<ThreadLocal<?>> {
		Object value;

		Entry(ThreadLocal<?> k, Object v) {
			super(k);
			value = v;
		}
	}
}
```

ThreadLocalMap使用ThreadLocal的弱引用作为key，如果一个ThreadLocal没有外部强引用来引用它，那么系统 GC 的时候，这个ThreadLocal势必会被回收，这样一来，ThreadLocalMap中就会出现key为null的Entry，就没有办法访问这些key为null的Entry的value，如果当前线程再迟迟不结束的话，这些key为null的Entry的value就会一直存在一条强引用链：**Thread Ref -> Thread -> ThreaLocalMap -> Entry -> value**永远无法回收，造成内存泄漏

大白话一点，ThreadLocalMap的key是弱引用，GC时会被回收掉，那么就有可能存在ThreadLocalMap<null, Object>的情况，这个Object就是泄露的对象

其实，ThreadLocalMap的设计中已经考虑到这种情况，也加上了一些防护措施：在ThreadLocal的get()，set()，remove()的时候都会清除线程ThreadLocalMap里所有key为null的value

### 解决办法
解决以上两个问题的办法很简单，就是在每次用完ThreadLocal后，及时调用remove()方法清理即可