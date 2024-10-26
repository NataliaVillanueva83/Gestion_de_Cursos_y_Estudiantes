import prompt_sync from 'prompt-sync';
import {cursos} from "./arreglos.js"

const prompt = prompt_sync();
 
function mostrarMenuAdministrativos() {
    const opcionesAdministrativos = [
      { Opción: 1, Descripción: "Ver reportes" },
      { Opción: 2, Descripción: "Eliminar alumno" },
      { Opción: 3, Descripción: "Volver al menú principal" }
    ];
    console.log("\nMenú para Administrativos:");
    console.table(opcionesAdministrativos);
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