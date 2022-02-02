const express = require('express');
const app = express();

//定义多个中间件
const mw1 = function (req, res, next) {
  console.log('调用了局部生效中间件1')
  next()
}

const mw2 = function (req, res, next) {
  console.log('调用了局部生效中间件2')
  next()
}

app.get('/', mw1, mw2, function (req, res) {
  res.send('Home page.')
})

//定义路由
app.get('/user', function (req, res) {
  res.send('User page.')
})

app.listen(80, function () {
  console.log('server running at http://127.0.0.1')

})