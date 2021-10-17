import { Bicicleta } from "./bicicleta";
export class biciCarretera extends Bicicleta{
    private _marchas: number;
    constructor(precioBase: number , materialChasis: string , tipoFrenos: string , tamanoLlantas: number ,numSerie:string, marchas: number) {
        super(precioBase, materialChasis, tipoFrenos, tamanoLlantas , numSerie);
        this._marchas = marchas;
    }
    get marchas() {
        return this._marchas
    }
    //sobre escribo el metodo precio
    precio(): number {
        let precio: number;
        precio = super.precio();
        if (this._marchas > 6) {
            precio += 0.05 * precio;
        }
        return precio;
    }
    //sobre escribo el metodo todo
    todo()  {
        return `Precio Base: ${super.todo()}, Marchas: ${this._marchas} `
    }
}