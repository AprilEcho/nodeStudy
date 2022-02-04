const express = require('express');
const app = express();

const joi = require('joi')

//write code here
//配置cors中间件
const cors = require('cors');
app.use(cors())

//配置解析表单数据的中间件
//只能解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({extended: false}))

// 托管静态资源文件
app.use('/uploads', express.static('./uploads'))

//封装res.cc函数
app.use((req, res, next) => {
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next()
})

//在路由之前配置解析token字符串
const expressJWT = require('express-jwt');
const config =require('./config');

app.use(expressJWT({secret:config.jwtSecretKey}).unless({path:[/^\/api/]}))

//用户路由模块
const userRouter = require('./router/user');
app.use('/api', userRouter)

//用户信息的路由模块
const userinfoRouter = require('./router/userinfo')
app.use('/my',userinfoRouter)

//文章分类路由模块
const artCateRouter = require('./router/artcate');
app.use('/my/article',artCateRouter)

//添加文章路由模块
const articleRouter = require('./router/article');
app.use('/my/article',articleRouter)

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  // 验证失败导致的错误
  if (err instanceof joi.ValidationError) return res.cc(err)
  //身份认证
  if (err.name==='UnauthorizedError') return res.cc('身份认证失败！')
  // 未知的错误
  res.cc(err)
})

//监听服务
app.listen(3007, function () {
  console.log('server running at http://127.0.0.1:3007 .')
})