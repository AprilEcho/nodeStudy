//导入数据库
const db = require('../db/index')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const config = require('../config')
// 定义和用户相关的路由处理函数，供/router/uer.js 模块调用
//注册的处理函数
exports.regUser = (req, res) => {
  //获取用户提交的信息
  const userInfo = req.body;
  //合法性检验
  // if (!userInfo.username || !userInfo.password) {
  //   return res.send({
  //     status: 1,
  //     message: '用户名或密码不合法！'
  //   })
  // }

  //查询用户名是否被占用
  const sqlStr = 'SELECT * FROM ev_users where username=?'
  db.query(sqlStr, [userInfo.username], (err, results) => {
    //执行出错 res.send({status: 1, message: err.message})
    if (err) return res.cc(err)

    //判断用户名是否被占用 res.send({status: 1, message: '用户名被占用，请更新其他用户名'})
    if (results.length > 0) return res.cc('用户名被占用，请更新其他用户名')

    //TODO：用户名可用
    //调用bcrypt.hashSync()对密码进行加密
    userInfo.password = bcrypt.hashSync(userInfo.password, 10)

    //插入用户新数据
    const sql = 'INSERT INTO ev_users set ?';
    db.query(sql, {username: userInfo.username, password: userInfo.password}, (err, results) => {
      //执行出错 res.send({status: 1, message: err.message})
      if (err) return res.cc(err)
      if (results.affectedRows !== 1) return res.cc('注册用户失败！')

      // res.send({status: 0, message: '注册成功！'})
      res.cc('注册成功！', 0)
    })
  })

  // res.send('reguser OK');
}

//登陆的处理函数
exports.login = ((req, res) => {
  const userInfo = req.body;
  const sql = 'SELECT * FROM ev_users WHERE username=?'
  db.query(sql, userInfo.username, (err, results) => {
    if (err) return res.cc(err)
    if (results.length !== 1) return res.cc('登陆失败！')
    //判断密码是否正确
    const compareResult = bcrypt.compareSync(userInfo.password, results[0].password)
    if (!compareResult) return res.cc('登陆失败！')

    //生成Token字段
    const user = {...results[0], password: '', user_pic: ''}
    //对用户信息进行加密，生成token字符串
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: config.expiresIn
    })
    res.send({
      status:0,
      message:'登陆成功！',
      token:'Bearer ' + tokenStr
    })

  })
})