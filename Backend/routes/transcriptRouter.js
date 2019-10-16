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
  if(!body.id || !body.cedula || !body.audio) {
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
    infoLlamada = new InformacionLlamada({id:body.id,cedula:body.cedula, audio:body.audio, texto:"asdas"});
    console.log("bandera1")
    robot = new ControladorRobot(1); 
    robot.enviarAlRobot("asdasd", body.cedula);
  }
    res.send(respuesta);
});
}
