var mongoose = require('mongoose');

var Schema=mongoose.Schema;

var transcripcion=new Schema({
    texto:{type:String,required: true},
    cedula:{type:String,required: true},
});
module.exports = mongoose.model('transcripción',transcripcion);
