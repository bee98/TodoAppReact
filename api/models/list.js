var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('lists', new Schema({ namework: String, person: String, date:Number,time:{type: Number, min: 0},done:false}),'lists');
