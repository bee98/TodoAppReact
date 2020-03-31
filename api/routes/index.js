var express = require('express');
var router = express.Router();
var list = require('../controllers/list');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/lists',(req,res,next)=>{
	list.show(req,res);

});
router.post('/add',(req, res, next)=>{
	list.add(req,res);
});
router.post('/edit',(req, res, next)=>{
	list.edit(req,res);
});
router.post('/delete',(req, res, next)=>{
	list.delete(req,res);
});
module.exports = router;
