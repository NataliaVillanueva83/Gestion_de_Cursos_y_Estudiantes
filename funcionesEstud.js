import prompt_sync from 'prompt-sync';
import {cursos} from "./arreglos.js"
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
    console.log("2. Inscribirse en curso");
    console.log("3. Ver notas por curso");
    console.log("4. Volver al menú principal");
}

function verCursos() {
    console.log("\nLista de cursos disponibles: ");
    cursos.forEach(element => {
            console.log(element.nombre);
        });
        
    }

  function inscribirseEnCurso( idAlumno ) {
    let nombreCurso = prompt("Introduce el nombre del curso en la que deseas inscribirte: ");
    let curso = cursos.find( c => c.nombre.toUpperCase() === nombreCurso.toUpperCase() );
    if( curso != undefined ){
        if( true ){
            if ( curso.estudiantes.length < curso.capacidad ){
                curso.estudiantes.push( { id:idAlumno, calificaciones:[] } );
                console.log( `Se inscribio con exito. Curso: ${ curso.nombre }.`) 
                curso.estudiantes.forEach( e => console.log( `- Estudiante con ID: ${e.id}` ) )
            } 
            else
                console.log( "El curso elegido supero la capacidad maxima." )
        }
    }else
        console.log( "El curso elegido no existe." )
}
  


function verNotas(idAlumno){
    cursos.forEach(c => {
        c.estudiantes.forEach(e =>{
            if(idAlumno == e.id){
                console.log(`Curso: ${c.nombre}. Notas: ${e.calificaciones}`);
                
            }
        })
    })


}


export {  mostrarMenuEstudiantes,verCursos as verCarreras,inscribirseEnCurso as inscribirseEncarrera,mostrarMenu,verNotas }
