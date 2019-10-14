import { Transcripcion } from './Transcripcion';

export class InformacionLlamada {
    transcripcion = null;
    cedula = null;
    constructor() {

        this.transcripcion = null;
    }

    setTranscripcion(transcripcion){
        this.transcripcion = transcripcion;
    }
    
    getTranscripcion():Transcripcion{
        return this.transcripcion;
    }
    setCedula(cedula){
        this.cedula = cedula;
    }
    
    getCedula(){
        return this.cedula;
    }
}
