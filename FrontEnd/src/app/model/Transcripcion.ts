export class Transcripcion {
    id = "";
    texto = "";
    constructor(id) {
        this.id = id;
        this.texto = "null";
    }
    setId(id) {
        this.id = id;
    }
    setTexto(texto) {
        this.texto = texto
    }
    getId() {
        return this.id;
    }
    getTexto() {
        return this.texto;
    }
}
