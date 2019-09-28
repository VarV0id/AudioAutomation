class controladorRobot{
    constructor(idBot,textoBot,estadoBot){
        this.idBot = idBot;
        this.textoBot = textoBot;
        this.estadoBot = estadoBot;
    }
    
    setId(idBot){
        this.idBot = idBot;
    }
    setTexto(textoBot){
        this.textoBot = textoBot;
    }
    setEstado(estadoBot){
        this.estadoBot = estadoBot;
    }

    getId(idBot){
        return this.idBot;
    }
    getTexto(textoBot){
        return this.textoBot;
    }
    getEstado(estadoBot){
        return this.estadoBot
    }
}
module.exports = controladorRobot;