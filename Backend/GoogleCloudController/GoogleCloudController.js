module.exports = async function main() {
    // Imports the Google Cloud client library
    const speech = require('@google-cloud/speech');
  
    // Creates a client
    const client = new speech.SpeechClient();

    
    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
      content: audio,
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
