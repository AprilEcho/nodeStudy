const express = require('express');
const app = express();

//解析表单中JSON格式的数据
app.use(express.json())

//解析表单中url-encoded格式的数据
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send('ok')
})

app.post('/book', (req, res) => {
  console.log(req.body)
  res.send('ok')
})

//监听
app.listen(80, function () {
  console.log('server running at http://127.0.0.1.')
})