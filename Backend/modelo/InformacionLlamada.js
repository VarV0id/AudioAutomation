var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var transcripcion=new Schema({
    idLlamada:{type:Number,required:true},
    texto:{type:String,required: true},
    audio:{type:String,required: true},
    cedula:{type:String,required: true},
});
module.exports = mongoose.model('transcripción',transcripcion);
