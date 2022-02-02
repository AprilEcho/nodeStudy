const express = require('express');
const app = express();

//导入路由模块
const router = require('./apiRouter')

//配置解析url-encoded格式的中间件
app.use(express.urlencoded({extended: false}))

//配置JSONP接口，必须在cors中间件之前定义
app.get('/api/jsonp', (req, res) => {
  //获取客户端发送过来的回调函数的名字
  const functionName = req.query.callback;
  const data = {'username': 'zs'}
  const scriptStr = `${functionName}(${JSON.stringify(data)})`
  res.send(scriptStr)
})

//配置cors中间件，解决跨域问题
const cors = require('cors')
app.use(cors())

app.use('/api', router)

//监听
app.listen(80, function () {
  console.log('server running at http://127.0.0.1.')
})