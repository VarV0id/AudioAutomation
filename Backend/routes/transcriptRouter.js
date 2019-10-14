module.exports = function(app) {
  const InformacionLlamada = require('../modelo/InformacionLlamada.js');
  const ControladorRobot = require ('../RobotRPA/controladorRobot');
  
/* GET home page. */
let respuesta = {
  error: false,
  codigo: 200,
  mensaje: ''
 };
app.post('/transcripcion', function (req, res) {
  var infoLlamada=new InformacionLlamada(req.body);
  if(!req.body.idLlamada || !req.body.texto) {
    respuesta.error=true;
    respuesta.codigo=502;
    respuesta.mensaje="Ocurrio un error";
  } else {
    respuesta.error= false;
    respuesta.codigo= 200;
    respuesta.mensaje="respuesta del usuario";
    infoLlamada.save();
    robot = new ControladorRobot(1);
    robot.enviarAlRobot(infoLlamada);
  }
  console.log(respuesta);
    res.send(JSON.stringify(respuesta));
});
app.get('/transcripciones', function(req, res) {
    InformacionLlamada.find({})
        .exec(function(err, transcripciones) {
            if(err) {
                res.send('err')
            } else {
                res.json(transcripciones);
            }
        });
});
};
