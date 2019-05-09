class Elevador {
    constructor(numPisos, pisoActual, edoPuerta) {
        this._numPisos = numPisos;
        this._pisoActual = pisoActual;
        this._edoPuerta = edoPuerta;
    }
    get numPisos() {
        return this._numPisos;
    }
    get pisoActual() {
        return this._pisoActual;
    }
    get edoPuerta() {
        return this._edoPuerta;
    }
    arbirPuerta() {
        if (this._edoPuerta === false) {
            this._edoPuerta = true;
        }
        else {
            console.log('La puerta está abierta.');
        }
    }
    cerrarPuerta() {
        if (this._edoPuerta === true) {
            return this._edoPuerta = false;
        }
        else {
            return 'La puerta está cerrada.';
        }
    }
    irA(destino) {
        if (destino > this._numPisos || destino < this._numPisos) {
            return false;
        }
        else {
            if (destino > this._pisoActual) {
                this.subir(destino);
            }
            else if (destino < this._pisoActual) {
                this.bajar(destino);
            }
            else {
                return 'El destino es el piso actual.';
            }
        }
    }
    subir(destino) {
        while (this._pisoActual < destino) {
            this._pisoActual++;
        }
        return this._pisoActual;
    }
    bajar(destino) {
        while (this._pisoActual > destino) {
            this._pisoActual--;
        }
        return this._pisoActual;
    }
}
let elevador = new Elevador(5, 0, false);
elevador.arbirPuerta();
elevador.cerrarPuerta();
elevador.irA(4);