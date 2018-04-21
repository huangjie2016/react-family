# react-family
react+react-router+react-redux+axios
## init
 npm install <br/>
 npm start <br/>
 <br/>
## demo内容
 登录请求（做了代理设置，就是所谓的跨域）、页面跳转、<br/>
 新页面通过路由给到的信息发送请求获得详细内容，内容支持tab切换、点击路由到redux计算页面（包含简易tdolist）<br/>
 <br/>
## 日常填坑记录
 1.入口文件如果用BrowserRouter包住整个html结构,地址栏url可以去除#号;<br/>
 2.路由传递this.props.history.push({pathname : '/content'}) 和VUE的区别是push里不能直接写({path: '/content'}),必须是pathname<br/>
 3.redux需要注意的是多个reducer合并的时候，每一个reducer的key是什么，组件里也要用相同的key获取，否则就会出错。<br/>
 感谢帮助过我的很多人，谢谢！


