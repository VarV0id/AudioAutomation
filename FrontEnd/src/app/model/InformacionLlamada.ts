import { Transcripcion } from './Transcripcion';

export class InformacionLlamada {
    id = ""
    transcripcion = null;
    audio = null;
    dni = "";
    constructor(id) {
        this.id = id;
        this.transcripcion = null;
        this.audio = null;
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
    
    getTranscripcion():Transcripcion{
        return this.transcripcion;
    }
    setAudio(audio){
        this.audio = audio;
    }
    
    getAudio(){
        return this.audio;
    }
}
