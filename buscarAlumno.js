
import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();
export { alumnos, materias,profesores,notas,cursos }
export { agregarAlumno, }
export{ eliminarAlumno }


const alumnos = [];
const materias = [];
const profesores = [];
const notas = [];
const cursos = [
    {
        nombreCurso: "auto",
        materias: ["matematicas","historia"],
        profesor: "jorge rodriguez",
        alumnos: [],
    }     
];

function agregarAlumno( nombre, apellido ) {
    alumnos.push ({nombre, apellido}) ;
    console.log(" ----------- ")
    console.log("Alumno agregado con éxito");
    console.log(" ----------- ")
  }
  
function eliminarAlumno() {
    const nombreAEliminar = prompt("Ingrese nombre del alumno: ");
    const apellidoAEliminar = prompt("Ingrese apellido del alumno: ");
    const indiceAEliminar = alumnos.findIndex( a => a.nombre == nombreAEliminar && a.apellido == apellidoAEliminar );
    if( indiceAEliminar == -1 ){
        console.log(" ----------- ")
        console.log(" El alumno no exite. ")
        console.log(" ----------- ")
    } else {
        alumnos.splice( indiceAEliminar, 1 );
        console.log(" ----------- ")
        console.log("se elimino")
        console.log(" ----------- ")
    }
}