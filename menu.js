// Función para mostrar el menú principal

//const prompt = require ("prompt-sync")();
import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();
//import { alumnos, materias,profesores,notas,cursos } from "./buscarAlumno.js";


let opcion = parseInt(prompt("INTRODUCE TU OPCION :  (1-3):"));
let id = prompt("INTRODUCE TU ID ");


function mostrarMenu() {
    console.log("Selecciona una opción:");
    console.log("1. Menú para Estudiantes");
    console.log("2. Menú para Profesores");
    console.log("3. Menú para Administrativos");
    console.log("4. Salir");
  }
  

  function manejarEleccion(opcion, id) {
    switch (opcion) {
      case 1:
        console.log(`Ingresaste como Estudiante con ID: ${id}`);
        // Aquí puedes añadir más opciones específicas para Estudiantes
        console.log("1. Ver cursos");
        console.log("2. Inscribirse en un curso");
        break;
      case 2:
        console.log(`Ingresaste como Profesor con ID: ${id}`);
        // Aquí puedes añadir más opciones específicas para Profesores
        console.log("1. Ver horarios");
        console.log("2. Calificar estudiantes");
        break;
      case 3:
        console.log(`Ingresaste como Administrativo con ID: ${id}`);
        // Aquí puedes añadir más opciones específicas para Administrativos
        console.log("1. Ver reportes");
        console.log("2. Gestionar recursos");
        case 4:
         console.log(" hasta pronto");
        return;
        default:
        console.log("Opción no válida");
        
    }
  }
  

  mostrarMenu();
  manejarEleccion(opcion, id);
  