const fs = require('fs');
fs.readFile('./files/1.txt', 'utf-8', function (err, data) {
  console.log(err); //null
  console.log('------');
  //鹅鹅鹅，曲项向天歌。
  //白毛浮绿水，红掌拨清波。
  console.log(data);
})