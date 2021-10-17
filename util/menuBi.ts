import { leer } from './entradaTeclado'

export const menuBi = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Bicicleta de Montaña')
    console.log('2.- Bicicleta de Carretera')
    console.log('3.- Bicicleta estandar')
    console.log('0.- Salir')
    n = parseInt( await leer('opción: '))
    return n
}