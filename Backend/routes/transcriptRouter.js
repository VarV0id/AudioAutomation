audio = null
module.exports = function(app) {
  const InformacionLlamada = require('../modelo/InformacionLlamada.js');
  
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
  }
    res.send(respuesta);
});
app.get('/transcripciones', function(req, res) {
  InformacionLlamada.find({},{audio:0})
      .exec(function(err, transcripciones) {
          if(err) {
              res.send('err')
          } else {
              res.json(transcripciones);
          }
      });
});
};
async function main() {
  const InformacionLlamada = require('../modelo/InformacionLlamada.js');
  const ControladorRobot = require ('../RobotRPA/controladorRobot');
  // Imports the Google Cloud client library
  const speech = require('@google-cloud/speech');

  // Creates a client
  const client = new speech.SpeechClient();

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    content: this.audio,
  };
  const config = {
    encoding: 'ENCODING_UNSPECIFIED',
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
  infoLlamada = new InformacionLlamada({id:body.id,cedula:body.cedula, audio:body.audio, texto:transcription});
  infoLlamada.save()
  robot = new ControladorRobot(1); 
  robot.enviarAlRobot(transcription, body.cedula);  
}

