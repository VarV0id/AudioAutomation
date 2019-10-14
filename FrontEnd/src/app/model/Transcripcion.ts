export class Transcripcion {
    texto = "";
    constructor(texto) {
        this.texto = texto;
    }

    setTexto(texto) {
        this.texto = texto
    }

    getTexto() {
        return this.texto;
    }
}
