class Transcripcion {
    constructor(idInfoLlamada, texto) {
      this.idInfoLlamada = id;
      this.texto =  texto;
    }
    setId(idInfoLlamada){
        this.idInfoLlamada = idInfoLlamada;
    }
    setTexto(texto){
        this.texto = texto
    }
    getIdInfoLlamada(){
        return this.idInfoLlamada;
    }
    getTexto(){
        return this.texto;
    }
}
module.exports = Transcripcion;