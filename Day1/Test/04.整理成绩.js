const fs = require('fs');
fs.readFile('./Accessory/成绩.txt', 'utf-8', function (err, data) {
  if (!err) {
    let newdata = []
    data.split(" ").forEach((item) => {
      newdata.push(item.replace("=", "："))
    })
    const newStr = newdata.join("\r\n");
    fs.writeFile('./files/成绩-ok.txt', newStr, function (err) {
      if (!err) {
        console.log('成绩写入成功！')
      } else {
        console.log('成绩写入失败！')
      }
    })
  } else {
    console.log("文件读取失败!")
  }
})