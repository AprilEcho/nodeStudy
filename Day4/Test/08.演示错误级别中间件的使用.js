const express = require('express');
const app = express();

//定义路由
app.get('/', function (req, res) {
  throw new Error('服务器内部发生错误');
  res.send('Home Page');

})

//定义错误级别中间件，捕获整个项目的错误信息，防止整个项目崩溃
app.use((err, req, res, next) => {
  console.log('发生了错误,' + err.message);
  res.send('Error!' + err.message)
})

//监听
app.listen(80, function () {
  console.log('server running at http://127.0.0.1.')
})