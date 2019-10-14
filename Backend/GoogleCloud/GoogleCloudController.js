

module.exports = async function speechToText() {
        const speech = require('@google-cloud/speech');
        // Creates a client
        const client = new speech.SpeechClient();
        console.log("Hola")
        const fs = require('fs');   
        const fileName = './output.wav';

        // Reads a local audio file and converts it to base64
        const file = fs.readFileSync(fileName);
        const audioBytes = file.toString('base64');
        
        // The audio file's encoding, sample rate in hertz, and BCP-47 language code
        const audio = {
        content: audioBytes,
        };
        const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'es-ES',
        };
        const request = {
        audio: audio,
        config: config,
        };
        console.log("banderita")
        // Detects speech in the audio file
        const [response] = await client.recognize(request);
        const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
        console.log(`Transcription:`,transcription);
}