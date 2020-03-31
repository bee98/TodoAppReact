var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/bookstore",{useNewUrlParser: true});
var connection = mongoose.connection;
connection.on('errors',console.error.bind(console, 'connection error:'));
var list = mongoose.model('lists', new Schema({ namework: String, person: String, date:Date,time: Number,done:false}));
var arr = [{namework:"lam bai tap",person:"Duong",date:Date.now(),time:8,done:true},{namework:"di mua sam",person:"Dat",date:Date.now(),time:3,done:false},{namework:"di kham suc khoe",person:"Dung",date:Date.now(),time:5,done:false}];
list.collection.insertMany(arr,(error, docs) =>{
	console.log(docs);
	mongoose.connection.close();
	
});
