const http = require('http')
const server = http.createServer();
server.on('request',function (req,res){
  console.log('Someone visit our web server')
})
server.listen(80,function (){
  console.log('server running');
})