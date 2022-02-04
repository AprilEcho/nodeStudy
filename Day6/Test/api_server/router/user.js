const express = require('express');
const router = express.Router();

const {regUser, login} = require('../router_handler/user')

const expressJoi = require('@escook/express-joi')
const {reg_login_schema} = require('../schema/user')

//注册新用户
router.post('/reguser', expressJoi(reg_login_schema), regUser)

//登陆
router.post('/login', expressJoi(reg_login_schema), login)

module.exports = router