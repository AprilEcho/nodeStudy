const fs = require('fs')
fs.readFile('./files/1.txt', 'utf-8', function (err, data) {
  if (!err) {
    console.log('读取成功！\n' + data);
  } else {
    console.log('读取失败' + err.message);
  }
})