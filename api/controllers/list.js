var mongoose = require('mongoose');
var List = require('../models/list');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


exports.show = (req,res) =>
{
   console.log(req.query);
   List.find({}).sort('done').sort('-date').exec((err,list)=>{
    if(err) throw err;
   	res.json(list);
   });
}
exports.add = (req,res)=>{
	var time = parseFloat(req.body.time);
	List.create({done:false,namework:req.body.namework,person:req.body.person,date:Date.now(),time:time},(err)=>{
		if (err) throw err;
	});
    
    res.json("done!");
}
exports.delete = (req,res)=>{

	List.deleteOne({_id:req.body.id},(err)=>{
		if (err) throw err;
	});
	res.json("done!");
}
exports.edit = (req,res)=>{
	var time = parseFloat(req.body.time);
	List.updateOne({_id:req.body.id},{$set:{done:req.body.done,namework:req.body.namework,person:req.body.person,date:req.body.date,time:time}},(err)=>{
       if (err) throw err;
	});
	res.json("done!");
	
}
