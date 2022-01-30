const http = require('http')
const server = http.createServer()
const fs = require('fs')
const path = require('path')
server.on('request',(req,res)=>{
  const url = req.url;
  let fpath = ''
  if (url==='/'){
    fpath = path.join(__dirname,'./clock/index.html')
  }else{
    fpath = path.join(__dirname,'./clock',url)
  }
  fs.readFile(fpath,'utf-8',(err,data)=>{
    if (err) res.end('<h1>404 No found!</h1>')
    res.end(data)
  })
})
server.listen(80,()=>{
  console.log('server running at http://127.0.0.1')
})