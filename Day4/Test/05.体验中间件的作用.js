const express = require('express');
const app = express();

app.use(function (req, res, next) {
  const time = Date.now()
  req.startTime = time
  next()
})

app.get('/', function (req, res) {
  res.send('Home page.'+req.startTime)
})

app.get('/user', function (req, res) {
  res.send('User page.'+req.startTime)
})

app.listen(80,()=>{
  console.log('server running at http://127.0.0.1')
})