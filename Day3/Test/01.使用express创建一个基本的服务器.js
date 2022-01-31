const express = require('express');
//创建web服务器
const app = express();

//监听Get和Post请求
app.get('/user', (req, res) => {
  res.send({username: '流浪者', age: 18})
})

app.post('/user',(req,res)=>{
  res.send('Post请求成功！')
})

//获取url中传递的参数
app.get('/',(req,res)=>{
  res.send(req.query)
})

//获取url中的动态参数
app.get('/user/:id',(req,res)=>{
  res.send(req.params)
})

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})