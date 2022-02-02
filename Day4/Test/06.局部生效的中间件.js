const express = require('express');
const app = express();

//定义一个中间件
const mw = function (req,res,next) {
  console.log('调用了局部生效中间件')
  next()
}

app.get('/',mw,function (req,res) {
  res.send('Home page.')
})

app.get('/user',function (req,res) {
  res.send('User page.')
})




app.listen(80,function () {
  console.log('server running at http://127.0.0.1')
  
})