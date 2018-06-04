function JsonDate() {}

JsonDate.prototype.catalogues = [{"id":"642ac0b4cacd8745d644aaf45d1cca7e","title":"前端小白徒手搭博客之路","year":2018,"createTime":1525682494208,"abstract":"前言作为一个前端小白，一直以来，样式、布局、设计、灵感都是自己的痛点。看到前端人士随手一来就是一个高大上的网页，真是羡慕不已。所以决定从开始，打好基础，写一个传统的静态页面博客。项目地址线上地址我选择在上搭建博客，具体可以参考这两篇文章：怎样在上创建一个的博客手把手教你在搭建自己写的页面如果想打造博客专属域名，如下：域名购买与解析这里我们可以通过万网申请，查找你想申请域名，购买就可以了。购买域名完成，进入管理控制台：...","next":"Promise对象"},{"id":"00dada12c7e31b9f7bb37a3b2af7f7d4","title":"Promise对象","year":2018,"createTime":1524206093443,"abstract":"的含义所谓，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，是一个对象，从它可以获取异步操作的消息。对象有一下两个特点：对象的状态不受外界影响。对象代表一个异步操作，有三种状态：（进行中）、（已成功）和（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。一旦状态改变，就不会再变，任何时候都可以得到这个结果。对象的状态改变，只有两种可能...","next":"What is Node","prev":"前端小白徒手搭博客之路"},{"id":"08ad6d06e8a9c0c8aa4f4c45381e955d","title":"What is Node","year":2018,"createTime":1524205948124,"abstract":"出现之前应用往往基于客户端服务器模式，当客服端向服务器请求资源时，服务器会响应这个请求并且返回响应的资源。服务器只会在接收到客服端请求时才会做出响应，同时会在响应结束后关闭与客户端的连接。这种设计模式需要考虑到效率问题，因为每一个请求都需要处理时间和资源。因此，服务器在每一次处理请求的资源后应该关闭这个连接，以便于响应其他请求。如果同时有成千上万个请求同时发往服务器，服务器会变成什么样子呢？线程是系统能够并行处理多任...","next":"异步编程","prev":"Promise对象"},{"id":"fb6d78f11adcee47d22c2d618694e152","title":"异步编程","year":2018,"createTime":1524194426521,"abstract":"如何维护本体希望看到如下输出结果：但事实上，你会看到：怎么回事？大多数情况下，当一个函数嵌套在另一个函数中时，它就会自动继承父宿主函数的作用域，因而就能访问所有的变量了。那么，为什么嵌套的回调函数却没有返回正确的属性的值呢？这个问题归根于关键字和异步回调函数本身。别忘了，当你调用这样的函数的时候，它会首先初始化自己，然后调用底层的操作系统函数，并把回调函数插到事件队列中去。执行完会立即返回给函数，然后退出。当函数完成...","prev":"What is Node"}];

JsonDate.prototype.getCatalogues = function() {
    return this.catalogues;
};

JsonDate.prototype.getCatalogueInfo = function(index) {
    return this.catalogues[index];
};