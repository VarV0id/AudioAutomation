audio = null
module.exports = function(app) {
  const Transcripcion = require('../modelo/Transcripcion.js');
  const InformacionLlamada = require('../modelo/InformacionLlamada.js');
  const ControladorRobot = require ('../RobotRPA/controladorRobot');
  const speechToText = require('../GoogleCloudController/GoogleCloudController');
  
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
    this.audio = body.audio
    main(audio).catch(console.error);
    infoLlamada = new InformacionLlamada({id:body.id,cedula:body.cedula, audio:body.audio, texto:"asdas"});
    console.log("bandera1")
    robot = new ControladorRobot(1); 
    robot.enviarAlRobot("asdasd", body.cedula);
  }
    res.send(respuesta);
});
}
async function main() {
  // Imports the Google Cloud client library
  const speech = require('@google-cloud/speech');

  // Creates a client
  const client = new speech.SpeechClient();

  
  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    content: this.audio,
  };
  const config = {
    encoding: 'FLAC',
    sampleRateHertz: 16000,
    languageCode: 'es-CO',
  };
  const request = {
    audio: audio,
    config: config,
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log(`Transcription: ${transcription}`);  
}

