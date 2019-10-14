

module.exports = async function speechToText(file) {
        const speech = require('@google-cloud/speech');
        // Creates a client
        const client = new speech.SpeechClient();
        
        const audioBytes = file
    
        // The audio file's encoding, sample rate in hertz, and BCP-47 language code
        const audio = {
        content: audioBytes,
        };
        const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
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
        console.log(`Transcription: ${transcription}`);
}