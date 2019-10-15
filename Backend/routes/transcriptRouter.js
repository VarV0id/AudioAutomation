module.exports = function(app) {
  const Transcripcion = require('../modelo/Transcripcion.js');
  const InformacionLlamada = require('../modelo/InformacionLlamada.js');
  const ControladorRobot = require ('../RobotRPA/controladorRobot');
  
/* GET home page. */
let respuesta = {
  error: false,
  codigo: 200,
  mensaje: ''
 };
app.post('/transcripcion', function (req, res) {
  body = req.body
  if(!body.id || !body.texto) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: 'El campo id y texto son requeridos'
     };
  } else {
      respuesta = {
       error: false,  
       codigo: 200,
       mensaje: 'respuesta del usuario'
      };
    transcripcion = new Transcripcion(body.id,body.texto)
    infoLlamada = new InformacionLlamada();
    infoLlamada.setTranscripcion(transcripcion);
    console.log("bandera1")
    robot = new ControladorRobot(1);
    console.log("bandera2")
    robot.enviarAlRobot(infoLlamada);
  }
    res.send(respuesta);
});
}
