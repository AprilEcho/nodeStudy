const express = require('express');
const router = express.Router();

router.get('/get', (req, res) => {
  const query = req.query;
  res.send({
    status: 0, //0表示请求成功，1代表请求失败
    msg: 'GET 请求成功',
    data: query //需要响应给客户端的数据
  })
})

router.post('/post', (req, res) => {
  const body = req.body;
  res.send({
    status: 0, //0表示请求成功，1代表请求失败
    msg: 'POST 请求成功',
    data: body //需要响应给客户端的数据
  })
})

router.delete('/delete', (req, res) => {
  res.send({
    status: 0, //0表示请求成功，1代表请求失败
    msg: 'DELETE 请求成功',
  })
})

module.exports = router