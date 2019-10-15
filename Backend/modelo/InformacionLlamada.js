class InformacionLlamada {
    constructor(id) {
        this.id = id;
        this.transcripcion = null;
        this.audio = null;
        this.dni = "";
    }
    setDni(dni){
        this.dni = dni;
    }
    getDni(){
        return this.dni;
    }
    setId(id){
        this.id = id;
    }
    getId(){
        return this.id;
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