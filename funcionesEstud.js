import prompt_sync from 'prompt-sync';
import {carreras,cursos} from "./arreglos.js"
const prompt = prompt_sync();
import chalk from 'chalk';
function mostrarMenu() {
    const menu = [
      { Opción: 1, Descripción: "Menú para Estudiantes" },
      { Opción: 2, Descripción: "Menú para Profesores" },
      { Opción: 3, Descripción: "Menú para Administrativos" },
      { Opción: 4, Descripción: "Salir" }
    ]
    console.log("\nSelecciona una opcion:")
    console.table(menu);
  }

  function mostrarMenuEstudiantes() {
    const opcionesEstudiantes = [
      { Opción: 1, Descripción: "Ver carreras" },
      { Opción: 2, Descripción: "Inscribirse en un carrera" },
      { Opción: 3, Descripción: "ver un curso" },
      { Opción: 4, Descripción: "Inscribirse en un curso" },
      { Opción: 5, Descripción: "Ver notas" },
      { Opción: 6, Descripción: "Volver al menú principal" }
    ];
    console.log("\nMenú para Estudiantes:");
    console.table(opcionesEstudiantes);
  }

function verCursos() {
    //console.log("\nLista de cursos disponibles: ");
   // cursos.forEach(element => {
           // console.log(element.nombre);
       /// });
       console.table(cursos);
}
    function verCarreras() {
       // console.log("\nLista de cursos disponibles: ");
       // cursos.forEach(element => {
         //       console.log(element.nombre);
           // });
                console.table(carreras)
}                
            


  function inscribirseEnCurso( idAlumno ) {
    let nombreCurso = prompt("Introduce el nombre del curso en la que deseas inscribirte: ");
    let curso = cursos.find( c => c.nombre.toUpperCase() === nombreCurso.toUpperCase() );
    if( curso != undefined ){
            if ( curso.estudiantes.length < curso.capacidad ){
                curso.estudiantes.push( { id:idAlumno, calificaciones:[] } );
                console.log( `Se inscribio con exito. Curso: ${ curso.nombre }.`) 
                curso.estudiantes.forEach( e => console.log( `- Estudiante con ID: ${e.id}` ) )
            } 
            else
                console.log( "El curso elegido supero la capacidad maxima." )
    }else
        console.log( "El curso elegido no existe." )
}
  
function inscribirseEncarrera( idAlumno ) {
    let nombreCarrera = prompt("Introduce el nombre de la carrera en la que deseas inscribirte: ");
    let carrera = carreras.find( c => c.nombre.toUpperCase() === nombreCarrera.toUpperCase() );
    if( carrera != undefined ){
        if( carrera.estudiantes == null )
            carrera.estudiantes = []
        if ( carrera.estudiantes == null || carrera.estudiantes.length < carrera.capacidad ){
            carrera.estudiantes.push( { id:idAlumno, calificaciones:[] } );
            console.log( `Se inscribio con exito. Carrera: ${ carrera.nombre }.`) 
            carrera.estudiantes.forEach( e => console.log( `- Estudiante con ID: ${e.id}` ) )
        } 
        else
            console.log( "La carreara elegida supero la capacidad maxima." )
    }else
        console.log( "La carrera elegido no existe." )
}

function verNotas(idAlumno){
 let  notasEncontradas = false
    cursos.forEach(c => {
        c.estudiantes.forEach(e =>{
            if(idAlumno == e.id){
                console.log(`Curso: ${c.nombre}. Notas: ${e.calificaciones}`);
                
            }
        })
    })
if(!notasEncontradas){
  console.log(chalk.greenBright("todavia no hay notas"))
}

}


export {  mostrarMenuEstudiantes,verCursos , verCarreras,inscribirseEnCurso , inscribirseEncarrera,mostrarMenu,verNotas }
