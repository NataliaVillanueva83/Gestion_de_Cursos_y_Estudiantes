import prompt_sync from 'prompt-sync';
import {cursos} from "./arreglos.js"
const prompt = prompt_sync();
 
function mostrarMenuAdministrativos() {
    console.log("\nMenú para Administrativos:");
    console.log("1. Ver reportes");
    console.log("2. Eliminar alumno");
    console.log("3. Volver al menú principal");
}

function eliminarAlumno(){
    let idAlumno = prompt("Introduce el id del alumno a eliminar: ");
    cursos.forEach(c => {
        const indice=c.estudiantes.findIndex(e => e.id == idAlumno)
        if(indice != -1)
            c.estudiantes.slice(indice,1)
    })
}

function verReportes(){
console.log("alumnos que deban ducumentacion presentarse por direccion ");


}

export {  mostrarMenuAdministrativos,eliminarAlumno,verReportes }