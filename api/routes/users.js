var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',(req, res, next)=>{
  res.json({"name":"TO DO","author":"@kai"});
});
router.get('/',(req, res, next)=>{
	
});

module.exports = router;
