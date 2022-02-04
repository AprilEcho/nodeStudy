const express = require('express')
const router = express.Router();
const {getArticleCates, addArticleCates,deleteCateById,getArtCateById,updateCateById} = require('../router_handler/artcate');

const expressJoi = require('@escook/express-joi');
const {add_cate_schema,delete_cate_schema,get_cate_schema,update_cate_schema} = require('../schema/artcate')

//获取文章列表
router.get('/cates', getArticleCates)

//新增文章分类
router.post('/addcates', expressJoi(add_cate_schema), addArticleCates)

//删除文章列表
router.get('/deletecate/:id',expressJoi(delete_cate_schema),deleteCateById)

//根据id获取文章分类数据
router.get('/cates/:id',expressJoi(get_cate_schema),getArtCateById)

router.post('/updatecate',expressJoi(update_cate_schema),updateCateById)

module.exports = router