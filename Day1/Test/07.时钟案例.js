const fs = require('fs');
const path = require('path')

const regstyle = /<style>[\s\S]*<\/style>/
const regscript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './Accessory/index.html'), 'utf-8', function (err, dataStr) {
  if (err) return '文件读取失败！'

  resolveCss(dataStr);
  resolveJavaScript(dataStr);
  resolveHtml(dataStr)

})

//提取CSS
function resolveCss(dataStr) {
  const r1 = regstyle.exec(dataStr);
  const CssStr = r1[0].replace('<style>', "").replace('</style>', "")
  fs.writeFile(path.join(__dirname, './files/clock/index.css'), CssStr, function (err) {
    if (err) return '文件写入失败'
    console.log('CSS文件写入成功')
  })
}

//提取JavaScript
function resolveJavaScript(dataStr) {
  const r2 = regscript.exec(dataStr);
  const JsStr = r2[0].replace('<script>', "").replace('</script>', "")
  fs.writeFile(path.join(__dirname, './files/clock/index.js'), JsStr, function (err) {
    if (err) return '文件写入失败'
    console.log('JavaScript文件写入成功')
  })
}

//提取html
function resolveHtml(dataStr) {
  const htmlStr = dataStr.replace(regstyle, '<link rel="stylesheet" href="./index.css" />').replace(regscript, '<script src="./index.js"></script>');
  fs.writeFile(path.join(__dirname,'./files/clock/index.html'),htmlStr,function (err){
    if (err) return '文件写入失败'
    console.log('Html文件写入成功')
  })
}