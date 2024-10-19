import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();

import {carreras} from "./arreglos.js"

function mostrarMenuProfesores() {
    console.log("\nMenú para Profesores:");
    console.log("1. Ver horarios");
    console.log("2. Calificar estudiantes");
    console.log("3. Ver estudiantes de una carrera");
    console.log("4. Volver al menú principal");
  }

  
function verHorarios(){
    console.log("no estoy programada.")
}

function calificarEstudiante(){
    console.log("no estoy programada.")
}

function verEstudianteEnCarrera(){
    let nombreCarrera = prompt("Introduce el nombre de la carrera: ");
    let carrera = carreras.find( c => c.nombre === nombreCarrera );
    if( carrera != undefined ){
        console.log( `Estudiantes en la carrera ${carrera.nombre}` );
        if( carrera.estudiantes.length === 0 ){ 
            console.log( `La carrera no tiene estudiantes.` );
            return;
        }
        console.log( carrera.estudiantes );
    }else{
        console.log( `La carrera no existe.` );
    }
}

export { mostrarMenuProfesores, verEstudianteEnCarrera, verHorarios, calificarEstudiante }