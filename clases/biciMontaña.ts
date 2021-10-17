import { Bicicleta } from "./bicicleta";
export class biciMontana extends Bicicleta{
    private _suspension: string;
    constructor(precioBase: number , materialChasis: string , tipoFrenos: string , tamanoLlantas: number ,numSerie:string, suspension: string ) {
        super(precioBase, materialChasis, tipoFrenos ,tamanoLlantas ,numSerie );
        this._suspension = suspension;
    }
    get suspension() {
        return this._suspension
    }
    //sobre escribo el metodo precio
    precio(): number {
        let precio: number;
        precio = super.precio();
        if (this._suspension == "neumatica") {
            precio += 0.12 * precio;
        }
        return precio;
    }
    //sobre escribo el metodo todo
    todo()  {
        return `Precio Base: ${super.todo()}, Suspension: ${this._suspension} `
    }
}