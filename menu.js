import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();
import chalk from 'chalk';

import { mostrarMenuEstudiantes, verCarreras, inscribirseEncarrera ,inscribirseEnCurso, verNotas, verCursos} from "./funcionesEstud.js";
import { estudiantes, profesores, administrativos,carreras,cursos} from "./arreglos.js";
import { mostrarMenuProfesores, verHorarios, calificarEstudiante, verEstudianteEnCarrera, verPromedioGeneralPorCurso, verPromedioPorEstudiantePorCurso } from './funcionesProf.js';
import { mostrarMenuAdministrativos, eliminarEstudiante,buscarEstudianteporNombre, verReportes } from "./administrativos.js";

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

function manejarEleccion(opcion, id) {
  switch (opcion) {
    case 1:
      if (id > 0 && id < 999)
      console.log(chalk.red(`\nIngresaste como Estudiante con ID: ${id}`));
      manejarSubmenu(mostrarMenuEstudiantes, id, manejarOpcionSubmenuEstudiante);
      break;
    case 2:
      if (id > 999 ) {
        console.log(`\nIngresaste como Profesor con ID: ${id}`);
        manejarSubmenu(mostrarMenuProfesores, id, manejarOpcionSubmenuProfesor);
      } else {
        console.log("No puedes usar esta opción");
      }
      break;
    case 3:
      if(id >2000){
      console.log(`\nIngresaste como Administrativo con ID: ${id}`);
      manejarSubmenu(mostrarMenuAdministrativos, id, manejarOpcionSubmenuAdministrativo);
    } else {
      console.log("No puedes usar esta opción");
    }
      break;
    case 4:
      console.log("\nVolviendo al menú anterior.");
      return 0;
    default:
      console.log("\nOpción no válida, introduce una opción válida");
  }
}

function manejarSubmenu(mostrarSubmenu, id, manejarOpcionSubmenu) {
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
      inscribirseEncarrera(id);
      return false;
      case 3:
        verCursos(id);
        return false;
    case 4:
      inscribirseEnCurso(id);
      return false;
    case 5:
      verNotas(id);
      return false;
    case 6:
      console.log("\nVolviendo al menú principal");
      return true;
    default:
      console.log("\nOpción no válida, introduce una opción válida");
      return false;
  }
}

function manejarOpcionSubmenuProfesor(opcionSubmenu, id) {
  switch (opcionSubmenu) {
    case 1:
      verHorarios();
      return false;
    case 2:
      calificarEstudiante();
      return false;
    case 3:
      verEstudianteEnCarrera();
      return false;
    case 4:
      verPromedioGeneralPorCurso();
      return false;
    case 5:
      verPromedioPorEstudiantePorCurso();
      return false;
    case 6:
      console.log("\nVolviendo al menú principal");
      return true;
    default:
      console.log("\nOpción no válida, introduce una opción válida");
      return false;
  }
}

function manejarOpcionSubmenuAdministrativo(opcionSubmenu, id) {
  switch (opcionSubmenu) {
    case 1:
      verReportes();
      return false;
    case 2:
      eliminarEstudiante();
      return false;
    case 3:
      buscarEstudianteporNombre()
      console.log("\nbuscar alumno por nombre");
      return false;
      case 4:
      console.log("\nfuncion sin asignar");
      return false;
      case 5:
      console.log("\nVolviendo al menú principal");
      return true;
      
    default:
      console.log("\nOpción no válida, introduce una opción válida");
      return false;
  }
}

function pedirOpcionValida() {
  let continuar = true;
  while (continuar) {
    console.log(chalk.blue("\n--------------------------------------"));
    console.log(chalk.blue("|      INTRODUCE TU ID:              |"));
    console.log(chalk.blue("|----------------------------------- |"));
   
    let id = parseInt(prompt(">>> "));
    let nameId = estudiantes.find(estudiante => estudiante.id === id) ||
      profesores.find(profesor => profesor.id === id) ||
      administrativos.find(administrativo => administrativo.id === id);

    if (nameId) {
      console.log(chalk.red(`El nombre de la persona con ID ${id} es ${nameId.nombre}`));
    } else {
      console.log(`No se encontró a nadie con ID ${id}`);
      continue;
    }

    let opcionValida = -1;
    while (opcionValida != 0) {
      mostrarMenu();
      let opcion = parseInt(prompt("Introduce tu opción (1-4):"));
      opcionValida = manejarEleccion(opcion, id);
    }
    
    let continuarRespuesta = prompt("¿Quieres continuar con otro usuario? (si/no): ").toLowerCase();
    if (continuarRespuesta !== 'si') {
      continuar = false;
    }
  }
}

pedirOpcionValida();
console.log("\nPROGRAMA FINALIZADO.");

