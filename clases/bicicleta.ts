export class Bicicleta {
    protected _precioBase: number;
    private _numSerie: string ;
    protected _materialChasis: string;
    private _tipoFrenos: string;
    private _tamanoLlantas: number;
    constructor(precioBase: number , materialChasis: string , tipoFrenos: string , tamanoLlantas: number , numSerie: string){
        this._precioBase = precioBase;
        this._materialChasis = materialChasis;
        this._tipoFrenos = tipoFrenos;
        this._tamanoLlantas = tamanoLlantas;
        this._numSerie = numSerie;
    }
    get precioBase(){
        return this._precioBase
    }
    get materialChasis(){
        return this._materialChasis
    }
    set materialChasis(chasisnuevo: string){    // Nos hace falta para modificar
        this._materialChasis = chasisnuevo
      }
    get tipoFrenos(){
        return this._tipoFrenos
    }
    get tamanoLlantas(){
        return this._tamanoLlantas
    }
    get numSerie(){
        return this._numSerie
    }

    precio(): number {
        let precio: number;
        precio = this._precioBase;
        if (this._materialChasis == "carbono") {
            precio += 0.18 * precio
        }
        if (this._tipoFrenos == "hidraulico") {
            precio += 0.05 * precio
        }
        if (this._tamanoLlantas > 24) {
            precio += 0.09 * precio
        }
        return precio;
    }

    todo()  {
        return `Precio Base: ${this._precioBase}, Chasis: ${this._materialChasis} , Frenos: ${this._tipoFrenos} , Llantas: ${this._tamanoLlantas} , Numero de serie: ${this._numSerie}}`
    }
}