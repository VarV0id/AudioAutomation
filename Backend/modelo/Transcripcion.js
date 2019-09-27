class Transcripcion {
    constructor(id, texto) {
      this.id = id;
      this.texto =  texto;
    }
    setId(id){
        this.id = id;
    }
    setTexto(texto){
        this.texto = texto
    }
    getId(){
        return this.id;
    }
    getTexto(){
        return this.texto;
    }
}
module.exports = Transcripcion;