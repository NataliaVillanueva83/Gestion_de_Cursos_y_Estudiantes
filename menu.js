import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();

import { mostrarMenuEstudiantes ,verCarreras,inscribirseEncarrera as inscribirseEnCurso,verNotas} from "./funcionesEstud.js";
import {estudiantes,profesores,administrativos} from "./arreglos.js"
import { mostrarMenuProfesores, verHorarios, calificarEstudiante, verEstudianteEnCarrera, verPromedioGeneralPorCurso, 
  verPromedioPorEstudiantePorCurso
 } from './funcionesProf.js';
 import {  mostrarMenuAdministrativos,eliminarAlumno ,verReportes  } from "./administrativos.js"


let id = parseInt(prompt("INTRODUCE TU ID: "));
let nameId = estudiantes.find(estudiante=> estudiante.id === id) ||
profesores.find(profesor => profesor.id === id) ||
administrativos.find(administrativo => administrativo.id === id);

if (nameId) {
  console.log(`El nombre de la persona con ID ${id} es ${nameId.nombre}`);
} else {
  console.log(`No se encontró a nadie con ID ${id}`);
}



function mostrarMenu() {
  console.log("\nSelecciona una opción:");
  console.log("1. Menú para Estudiantes");
  console.log("2. Menú para Profesores");
  console.log("3. Menú para Administrativos");
  console.log("4. Salir");
}


function manejarEleccion(opcion, id) {
  switch (opcion) {
    case 1:
      console.log(`\nIngresaste como Estudiante con ID: ${id}`);
      
      manejarSubmenu(mostrarMenuEstudiantes, id, manejarOpcionSubmenuEstudiante );
      break;
    case 2:
      if(id > 0 && id < 200)
        console.log(`\nIngresaste como Profesor con ID: ${id}`);
      else 
        console.log("no puedes usar esta opcion");
      manejarSubmenu(mostrarMenuProfesores, id,  manejarOpcionSubmenuProfesor );
      break;
    case 3:
      console.log(`\nIngresaste como Administrativo con ID: ${id}`);
      manejarSubmenu(mostrarMenuAdministrativos, id, manejarOpcionSubmenuAdministrativo);
      break;
    case 4:
      console.log("\nHVolviendo al menu anterior.");
      return 0; 
    default:
      console.log("\nOpción no válida, introduce una opción válida");
  }
}

function manejarSubmenu(mostrarSubmenu, id, manejarOpcionSubmenu ) {
  let opcionValida = false;
  while (!opcionValida) {
    mostrarSubmenu();
    let opcionSubmenu = parseInt(prompt("Introduce tu opción:"));
    opcionValida = manejarOpcionSubmenu(opcionSubmenu, id);
  }
}

function manejarOpcionSubmenuEstudiante(opcionSubmenu, id) {
  switch (opcionSubmenu) {
    case 1:
      verCarreras();
      return false; 
    case 2:
      inscribirseEnCurso( id );
      return false; 
    case 3:
      verNotas(id);
      return false; 
    case 4:
      console.log("\nVolviendo al menú principal");
      return true; 
    default:
      console.log("\nOpción no válida, introduce una opción válida");
      return false; // Opción no válida, continuar el bucle del submenú
  }
}


function manejarOpcionSubmenuProfesor(opcionSubmenu, id) {
  switch (opcionSubmenu) {
    case 1:
      verHorarios();
      return false; 
    case 2:
      calificarEstudiante();
      return false; // Continuar en el submenú
    case 3:
      verEstudianteEnCarrera();
      return false; // Continuar en el submenú
    case 4:
      verPromedioGeneralPorCurso();
      return false; // Volver al menú principal
    case 5:
      verPromedioPorEstudiantePorCurso();
      return false; // Volver al menú principal
    case 6:
      console.log("\nVolviendo al menú principal");
      return true; // Volver al menú principal
    default:
      console.log("\nOpción no válida, introduce una opción válida");
      return false; // Opción no válida, continuar el bucle del submenú
  }
}

function manejarOpcionSubmenuAdministrativo(opcionSubmenu, id) {
  switch (opcionSubmenu) {
    case 1:
      verReportes();
      return false; 
    case 2:
      eliminarAlumno( );
      return false; 
    case 3:
      console.log("\nVolviendo al menú principal");
      return true; 
    default:
      console.log("\nOpción no válida, introduce una opción válida");
      return false; // Opción no válida, continuar el bucle del submenú
  }
}

function pedirOpcionValida(id) {
  let opcionValida = -1;
  while ( opcionValida != 0 ) {
    mostrarMenu();
    let opcion = parseInt(prompt("Introduce tu opción (1-4):"));
    opcionValida = manejarEleccion(opcion, id);
  }
}

pedirOpcionValida(id);

console.log("\nPrograma finalizado.");
