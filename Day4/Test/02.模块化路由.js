const express = require('express')
const app = express();
const router = require('./03.router')

//注册路由模块
app.use(router)

app.listen(80, () => {
  console.log('server running at http://127.0.0.1:80')
})