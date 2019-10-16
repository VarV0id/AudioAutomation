export class Transcripcion {
    texto = "";
    constructor() {
        this.texto = "null";
    }

    setTexto(texto) {
        this.texto = texto
    }

    getTexto() {
        return this.texto;
    }
}
