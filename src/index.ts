import { Bicicleta } from "../clases/bicicleta";
import { biciCarretera } from "../clases/biciCarretera";
import { biciMontana } from "../clases/biciMontaña";
import { leer } from "../util/entradaTeclado";
import { menuPral } from "../util/menuPral";
import { arrayBuffer } from "stream/consumers";
import { menuBi } from "../util/menuBi";





let bici: Bicicleta;
//declaro tipo array
let bicicletas: Array<Bicicleta> = new Array<Bicicleta>();
let n : number
const nuevoEstandar = async() => {
    let bici: Bicicleta
    const preciobase = parseInt(await leer ( 'precio base' ))
    const numserie = (await leer('Introduce el numero de serie'))
    const chasis = await leer ('Chasis (aluminio o carbono)')
    const frenos = await leer ('Tipo de frenos (cableado o hidraulico)')
    const llantas = parseInt(await leer ('Tamaño llantas'))
    bici = new Bicicleta (preciobase  , chasis , frenos , llantas, numserie )
    bicicletas.push(bici)
    
}

const nuevoMontana = async() => {
    let biciM: biciMontana
    const preciobase = parseInt(await leer ( 'precio base' ))
    const numserie = (await leer('Introduce el numero de serie'))
    const chasis = await leer ('Chasis (aluminio o carbono)')
    const frenos = await leer ('Tipo de frenos (cableado o hidraulico)')
    const llantas = parseInt(await leer ('Tamaño llantas'))
    const suspension = await leer ('Tipo de suspension (neumatica o muelles)')
    biciM = new biciMontana (preciobase , chasis , frenos , llantas  ,numserie, suspension )
    bicicletas.push(biciM)    
}

const nuevoCarretera = async() => {
    let biciC: biciCarretera
    const preciobase = parseInt(await leer ( 'precio base' ))
    const numserie = (await leer('Introduce el numero de serie'))
    const chasis = await leer ('Chasis (aluminio o carbono)')
    const frenos = await leer ('Tipo de frenos (cableado o hidraulico)')
    const llantas = parseInt(await leer ('Tamaño llantas'))
    const marchas = parseInt(await leer ('Numero de marchas'))
    biciC = new biciCarretera (preciobase  , chasis , frenos , llantas ,numserie, marchas )
    bicicletas.push(biciC)    
}


const mostrar = () => {

    for (let a of bicicletas) {
        console.log(a instanceof biciCarretera , biciMontana );
        console.log(`${a.todo()} , Precio final: ${a.precio()}`) 
      }
      
}



// Buscador
const buscar = async () =>{
let numIndex : number
let numserie : string 
numserie = (await leer ('Introduce el numero de serie de la bicicleta que busca'))

if (bicicletas != undefined){
    numIndex = bicicletas.findIndex((obj => obj.numSerie == numserie));  
    console.log(bicicletas[numIndex]);
    }
}

//Modificador -modifico el chasis-
const modificar  = async (bici: Bicicleta | undefined)  => {
    if (bici != undefined){
            let numserie: string  =  (await leer('Numero serie de la biciccleta a modificar'));
            let chasisnuevo : string = (await leer('Nueo chasis'));

            bicicletas.map(function(dato){              
            if (dato.numSerie == numserie){
                dato.materialChasis = chasisnuevo;
            }
            return dato;
            });
            console.log (bicicletas)
    }else{
        console.log(`Bicicleta nueva no creada`)
        try{
            console.log(bicicletas)
        }catch(err){
            console.log(`NO CREADO ***** ${err}`)
        }

}

    
} 

// Borrador de bicicletas

const borrar = async() => {
    let num2 : number
    for (let a of bicicletas) {
        console.log(a instanceof biciCarretera , Bicicleta , biciMontana );
        console.log(`${a.todo()} , Precio final: ${a.precio()}`) 
      }
    console.log('Estas son las bicicletas registradas')
    const numI = parseInt(await leer ('Introduce el numero de bicicleta que quiere borrar'))
    num2 = (numI - 1)
    console.log(num2)
    bicicletas.splice(num2,1)
}





// MENU


const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                 let n: number
                     do {
                        n = await menuBi()
                        switch(n){
                            case 1:
                                await nuevoMontana();
                                break
                            case 2:
                                await nuevoCarretera();
                                break
                            case 3:
                                await nuevoEstandar();
                                 break
                            case 0:
                                 console.log('\nVolviendo a menu principal')
                        }
                    }while (n != 0)      
                break
            case 2:
                await mostrar()
                break
            case 3:
                await buscar()
                break
            case 4:
                    await borrar();
                    break
            case 5:
                    await modificar(bici);
                    break
            case 0:
                console.log('\nAdios')
        }
    }while (n != 0)
}
main()













    
 