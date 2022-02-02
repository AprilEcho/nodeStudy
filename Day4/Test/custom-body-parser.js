//导入Node.js内置的querystring模块
const qs = require('querystring')

const bodyParser = (req, res, next)=>{
  //定义中间件具体的业务逻辑
  let str = '';

  //监听req的data事件
  req.on('data', (chunk) => {
    str += chunk
  })

  //监听req对象的end事件
  req.on('end', () => {
    //打印完整的请求体数据
    // console.log(str);

    //解析对象格式
    req.body = qs.parse(str);

    next()

  })
}

module.exports = bodyParser