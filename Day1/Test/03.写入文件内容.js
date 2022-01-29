const fs = require('fs');
fs.writeFile('./files/2.txt', 'write context', function (err) {
  // console.log(err)
  if (!err) {
    console.log('文件写入成功')
  } else {
    console.log('文件写入失败\n' + err.message);
  }
})