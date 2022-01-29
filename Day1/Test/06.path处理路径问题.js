const fs = require('fs')
const path = require('path')

//path.join的使用
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8', function (err, data) {
  if (!err) {
    console.log('文件读取成功');
    console.log(data)
  } else {
    console.log('文件读取失败')
  }
})

//path.basename的使用
//定义文件存放路径
const fpath = 'a/b/c/index.html'

console.log(path.basename(fpath));//index.html

console.log(path.basename(fpath, '.html'));//index

console.log(path.extname(fpath));//.html