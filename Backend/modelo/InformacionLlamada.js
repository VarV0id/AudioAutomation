var mongoose = require('mongoose');

var Schema=mongoose.Schema;

var infoLlamada=new Schema({
    id:{type:String,required: true},
    cedula:{type:String,required: true},
    audio:{type:String,required: true},
    texto:{type:String,required: true},

});
module.exports = mongoose.model('informacion_llamada',infoLlamada);

