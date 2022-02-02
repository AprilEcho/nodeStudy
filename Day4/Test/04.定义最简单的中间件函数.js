const express = require('express');
const app = express();

//中间件函数
// const mw = function (req, res, next) {
//   console.log('这是一个简单的中间件函数');
//   next();
// }
//
// app.use(mw)

app.use(function (req, res, next) {
  console.log('这是一个简单的中间件函数');
  next();
})

app.get('/', function (req, res) {
  console.log('调用了/这个路由');
  res.send('Home page.')
})

app.get('/user', function (req, res) {
  console.log('调用了/user这个路由');
  res.send('User page.')
})


app.listen(80, function () {
  console.log('server running at http://127.0.0.1')
})