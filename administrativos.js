import prompt_sync from 'prompt-sync';
import {cursos,estudiantes} from "./arreglos.js"

const prompt = prompt_sync();
 
function mostrarMenuAdministrativos() {
    const opcionesAdministrativos = [
      { Opción: 1, Descripción: "Ver reportes" },
      { Opción: 2, Descripción: "Eliminar estudiante" },
      { Opción: 3, Descripción: "buscar estudiante por nombre" },
      { Opción: 4, Descripción: "funcion reservada" },
      { Opción: 5, Descripción: "Volver al menú principal" },
    ];
    console.log("\nMenú para Administrativos:");
    console.table(opcionesAdministrativos);
}  
function buscarEstudianteporNombre() {
    let nombreEstudiante =prompt("Introduce el nombre del estudiante que deseas buscar: ");
  let estudiante = estudiantes.find(e =>e.nombre. toUpperCase() == nombreEstudiante.toUpperCase());
 if(estudiante){
    console.log(`El estudiante buscado es: ${estudiante.nombre}`)
 }else {
    console.log("no se encuentra el estudiante con ese nombre")

 }
       
  }




function eliminarEstudiante(){
    let idestudiante = prompt("Introduce el id del estudiante a eliminar: ");
    cursos.forEach(c => {
        const indice=c.estudiantes.findIndex(e => e.id == idestudiante)
        if(indice != -1)
            c.estudiantes.slice(indice,1)
    })
}

function verReportes(){
console.log("alumnos que deban ducumentacion presentarse por direccion ");


}

export {  mostrarMenuAdministrativos,eliminarEstudiante,verReportes,buscarEstudianteporNombre }