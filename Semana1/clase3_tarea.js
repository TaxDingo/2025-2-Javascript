// Día de la semana según número
// Función que devuelve el día de la semana según un número del 1 al 7
// Ejercicio: Crear un programa que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 = Lunes, 2 = Martes, etc.).

const { ask } = require('../helpers/input');

    

async function main() {
    const dia=number;
    const diaSemana =["Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo"]

    if (dia >= 1 && dia <= 7)
    {console.log(diaSemana[dia-1])}
    else {
        console.log("no es un numero valido.");
    }
}

main();