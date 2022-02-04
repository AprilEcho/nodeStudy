const express = require('express')
const router = express.Router();

const {getUserInfo,updateUserInfo,updatePassword,updateAvatar} = require('../router_handler/userinfo')

//验证用户信息
const expressJoi = require('@escook/express-joi');
const {update_userinfo_schema,update_password_schema,update_avatar_schema} = require('../schema/user')

//获取用户信息
router.get('/userInfo',getUserInfo)

//更新用户信息
router.post('/userInfo',expressJoi(update_userinfo_schema),updateUserInfo)

//重置密码
router.post('/updatepwd',expressJoi(update_password_schema),updatePassword)

router.post('/update/avatar',expressJoi(update_avatar_schema),updateAvatar)

module.exports = router