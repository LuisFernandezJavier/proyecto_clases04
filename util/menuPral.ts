import { leer } from '../util/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Nueva Bicicleta')
    console.log('2.- Mostrar Bicicleta')
    console.log('3.- Mostrar 1 Bicicleta')
    console.log('4.- Eliminar 1 Bicicleta')
    console.log('5.- Modificar Chasis')
    console.log('0.- Salir')
    n = parseInt( await leer('opción: '))
    return n
}