const {ask} = require ('../helpers/input');

async function main() {
    let option =''
    let frutas =[]

    while (option !==3){
        option = await ask ('¿Que deseas hacer? 1.- Agregar una Fruta 2.- Eliminar una fruta 3.- Salir')
        if (option === "1" ){
            
        }else if (option === "2" ){

        } else if (option === "3" ){

        } else {
            console.log ("Opción no valida")
        }
    }


    
}