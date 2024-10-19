import prompt_sync from 'prompt-sync';
import {carreras} from "./arreglos.js"
const prompt = prompt_sync();

function mostrarMenu() {
    console.log("\nSelecciona una opción:");
    console.log("1. Menú para Estudiantes");
    console.log("2. Menú para Profesores");
    console.log("3. Menú para Administrativos");
    console.log("4. Salir");
}

function mostrarMenuEstudiantes() {
    console.log("\nMenú para Estudiantes:");
    console.log("1. Ver cursos");
    console.log("2. Inscribirse en carrera");
    console.log("3. Ver notas");
    console.log("4. Ver notas por materia");
    console.log("5. Volver al menú principal");
}

function verCarreras() {
    console.log("\nLista de carreras disponibles: ");
    console.log("\ntecda");
    console.log("\ninicial");
    console.log("\nanalisis de sistemas");
    console.log("\nbibliotecario");
    
}

  function inscribirseEncarrera( idAlumno ) {
    let nombreCarrera = prompt("Introduce el nombre de la carrera en la que deseas inscribirte: ");
    let carrera = carreras.find( c => c.nombre === nombreCarrera );
    if( carrera != undefined )
        carrera.estudiantes.push( idAlumno );
    else
        console.log( "La carrera elegida no existe." )
}
  
export {  mostrarMenuEstudiantes,verCarreras,inscribirseEncarrera,mostrarMenu }
