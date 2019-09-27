class InformacionLlamada {
    constructor(id) {
        this.idTranscripcion = id;
        this.transcripcion = null;
        this.audio = null;
    }
    setIdTranscripcion(id){
        this.id = idTranscripcion;
    }
    getIdTranscripcion(){
        return this.idTranscripcion;
    }
    setTranscripcion(transcripcion){
        this.transcripcion = transcripcion;
    }
    
    getTranscripcion(){
        return this.transcripcion;
    }
    setAudio(audio){
        this.audio = audio;
    }
    
    getAudio(){
        return this.audio;
    }
}
module.exports = InformacionLlamada;