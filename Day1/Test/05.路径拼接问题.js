const fs = require('fs');
fs.readFile(__dirname+'/files/1.txt','utf-8',function (err,data) {
  if (!err){
    console.log('文件读取成功')
    console.log(data)
  }else {
    console.log('文件读取失败')
  }
})