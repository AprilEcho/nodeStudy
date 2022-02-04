const db = require('../db/index')

exports.getArticleCates = ((req, res) => {
  const sql = 'SELECT * FROM ev_article_cate WHERE is_delete=0 ORDER BY Id ASC'
  db.query(sql, (err, results) => {
    if (err) return res.cc(err);
    res.send({
      status: 0,
      message: '获取文章分类列表成功！',
      data: results
    })
  })
})

exports.addArticleCates = (req, res) => {
  const sql = 'SELECT * FROM ev_article_cate WHERE name=? OR alias=?'
  db.query(sql, [req.body.name, req.body.alias], (err, results) => {
    if (err) return res.cc(err);
    if (results.length === 2) return res.cc('分类名称与别名被占用，请更新后重试！')
    if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias)
      return res.cc('分类名称与分类别名被占用，请更换后重试！')
    if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！')
    if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')
    //插入数据
    const sqlStr = 'INSERT INTO ev_article_cate SET ?'
    db.query(sqlStr, req.body, (err, results) => {
      if (err) return res.cc(err);
      if (results.affectedRows !== 1) return res.cc('新增文章分类失败！')
      res.cc('新增文章分类成功！', 0)
    })
  })
}

exports.deleteCateById = (req, res) => {
  const sql = 'UPDATE ev_article_cate SET is_delete=1 WHERE Id=?'
  db.query(sql,req.params.id,(err,results)=>{
    if (err) return res.cc(err);
    if (results.affectedRows!==1) return res.cc('删除文章失败！');
    res.cc('删除文章成功！',0)
  })
}

exports.getArtCateById = (req,res)=>{
  const sql = 'SELECT * FROM ev_article_cate WHERE Id=?'
  db.query(sql,req.params.id,(err,results)=>{
    if (err) return res.cc(err);
    if (results.length!==1) return res.cc('获取文章分类失败！');
    res.send({
      status:0,
      message:'获取文章分类数据成功',
      data:results[0]
    })
  })
}

exports.updateCateById = (req,res)=>{
  const sql = 'SELECT * FROM ev_article_cate WHERE Id<>? AND (name=? OR alias=?)';
  db.query(sql,[req.body.Id,req.body.name,req.body.alias],(err,results)=>{
    if (err) return res.cc(err);
    if (results.length === 2) return res.cc('分类名称与别名被占用，请更新后重试！')
    if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias)
      return res.cc('分类名称与分类别名被占用，请更换后重试！')
    if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！')
    if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')

    //更新文章
    const sqlStr = 'UPDATE ev_article_cate SET ? WHERE Id=?'
    db.query(sqlStr,[req.body,req.body.Id],(err,results)=>{
      if (err) return res.cc(err);
      if (results.affectedRows!==1) return res.cc('更新文章分类失败！');
      res.cc("更新文章分类成功！",0)
    })

  })
}