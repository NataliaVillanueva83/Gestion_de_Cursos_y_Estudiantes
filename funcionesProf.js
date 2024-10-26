import prompt_sync from 'prompt-sync';
import { carreras,cursos } from './arreglos.js';
const prompt = prompt_sync();



function mostrarMenuProfesores() {
  const opcionesProfesores = [
    { Opción: 1, Descripción: "Ver horarios" },
    { Opción: 2, Descripción: "Calificar estudiantes" },
    { Opción: 3, Descripción: "Ver estudiante en carrera" },
    { Opción: 4, Descripción: "Ver promedio general por curso" },
    { Opción: 5, Descripción: "Ver promedio por estudiante por curso" },
    { Opción: 6, Descripción: "Volver al menú principal" }
  ];
  console.log("\nMenú para Profesores:");
  console.table(opcionesProfesores);
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

function verEstudianteEnCarrera(){
    let nombreCarrera = prompt("Introduce el nombre de la carrera: ");
    let carrera = carreras.find( c => c.nombre.toUpperCase() === nombreCarrera.toUpperCase() );
    if( carrera != undefined ){
        console.log( `Estudiantes en el carrera ${carrera.nombre}` );
        if( carrera.estudiantes.length === 0 ){ 
            console.log( `El carrera no tiene estudiantes.` );
            return;
        }
        carrera.estudiantes.forEach( e => console.log( `Estudiante ID: ${e.id}, ` ) );
    }else{
        console.log( `La carrera no existe.` );
    }
}


export { mostrarMenuProfesores, verHorarios, calificarEstudiante,
    verPromedioGeneralPorCurso, verPromedioPorEstudiantePorCurso,verEstudianteEnCarrera}