const express = require('express');
const app = express();

const customBodyParser = require('./custom-body-parser')

app.use(customBodyParser)

app.post('/user', ((req, res) => {
  res.send(req.body)
}))

//监听
app.listen(80, function () {
  console.log('server running at http://127.0.0.1.')
})