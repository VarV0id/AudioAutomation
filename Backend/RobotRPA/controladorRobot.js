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
    enviarAlRobot(texto, cedula){
        
        let json = {
            transcripcion: texto,
            cedula: cedula,
            estado: false
        }
        console.log(this.url)
        this.FileManager.escribirArchivo(this.url,json);
    }
    
}
module.exports = ControladorRobot;