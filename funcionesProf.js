import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();

import {cursos} from "./arreglos.js"

function mostrarMenuProfesores() {
    console.log("\nMenú para Profesores:");
    console.log("1. Ver horarios");
    console.log("2. Calificar estudiante ");
    console.log("3. Ver estudiantes de una carrera");
    console.log("4. Ver promedio general por curso");
    console.log("5. Ver promedio de cada estudiante por curso");
    console.log("6. Volver al menú principal");
  }

  function verPromedioGeneralPorCurso(){
    const nombreCurso = prompt("Introduce el nombre del curso: ");
    const curso = cursos.find( c => c.nombre.toLowerCase() === nombreCurso.toLowerCase() );
    let sumaPromedios = 0;
    let sumaNotas = 0;
    curso.estudiantes.forEach( 
        e => {
            e.calificaciones.forEach( nota => sumaNotas += nota );
            const promedio = sumaNotas / e.calificaciones.length;
            sumaPromedios = sumaPromedios + promedio;
        }
    );
    console.log( `El promedio general de ${nombreCurso} es: ${ sumaPromedios/curso.estudiantes.length }`);
  }

  function verPromedioPorEstudiantePorCurso(){
    const nombreCurso = prompt("Introduce el nombre del curso: ");
    const idEstudiante = prompt("Introduce el id del estudiante: ");
    const curso = cursos.find( c => c.nombre.toLowerCase() === nombreCurso.toLowerCase() );
    if( curso != undefined ){
        const estudiante = curso.estudiantes.find( e => e.id == idEstudiante );
        if( estudiante != undefined ){
            if( estudiante.calificaciones.length === 0 )
                console.log("El estudiante no tiene calificaciones.")
            else{
                let sumaNotas = 0;
                estudiante.calificaciones.forEach( nota => sumaNotas += nota );
                const promedio = sumaNotas / estudiante.calificaciones.length;
                console.log( `El promedio es: ${ promedio }`);
            }
        } else 
            console.log(`No se encontro al estudiante ${idEstudiante} ingresado en el curso ${nombreCurso}.`)
    } else 
        console.log("El curso ingresado no existe.")
}

  
function verHorarios(){
    console.log("Todos los cursos son de lunes a viernes de 18hs a 22hs.")
}

function calificarEstudiante(){
    const idEstudiante = prompt("Introduce el id del estudiante: ");
    const nombreCurso = prompt("Introduce el nombre del curso: ");
    const nota = prompt("Introduce la nota: ");
    const curso = cursos.find( c => c.nombre.toUpperCase() === nombreCurso.toUpperCase() );
    if( curso != undefined ){
        const estudiante = curso.estudiantes.find( e => e.id == idEstudiante );
        if( estudiante != undefined ){
            if( estudiante.calificaciones == undefined )
                estudiante.calificaciones = [];
            estudiante.calificaciones.push( parseInt( nota ) );
        }else
            console.log(`No se encontro al estudiante ${idEstudiante} ingresado en el curso ${nombreCurso}.`)
    }else
        console.log("El curso ingresado no existe.")
}

function verEstudianteEnCurso(){
    let nombreCurso = prompt("Introduce el nombre del curso: ");
    let curso = cursos.find( c => c.nombre.toUpperCase() === nombreCurso.toUpperCase() );
    if( curso != undefined ){
        console.log( `Estudiantes en el curso ${curso.nombre}` );
        if( curso.estudiantes.length === 0 ){ 
            console.log( `El curso no tiene estudiantes.` );
            return;
        }
        curso.estudiantes.forEach( e => console.log( `Estudiante ID: ${e.id}, Calificaciones: ${e.calificaciones}` ) );
    }else{
        console.log( `La curso no existe.` );
    }
}

export { mostrarMenuProfesores, verEstudianteEnCurso as verEstudianteEnCarrera, verHorarios, calificarEstudiante,
    verPromedioGeneralPorCurso, verPromedioPorEstudiantePorCurso
 }