const FileManager = require ('./FileManager');
class ControladorRobot{
    constructor(idBot){
        this.idBot = idBot;
        this.url = "./RobotRPA/data/automatico.json";
        this.FileManager = new FileManager();
    }
    setId(idBot){
        this.idBot = idBot;
    }
   
    getId(idBot){
        return this.idBot;
    }
    enviarAlRobot(texto){
        
        let json = {
            transcripcion: texto.getTranscripcion().getTexto(),
            estado: false
        }
        this.FileManager.escribirArchivo(this.url,json);
    }
    
}
module.exports = ControladorRobot;