import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();
import {mostrarMenu ,mostrarMenuEstudiantes } from "./funcionesEstud.js";


let id = prompt("INTRODUCE TU ID: ");


function mostrarMenuProfesores() {
  console.log("\nMenú para Profesores:");
  console.log("1. Ver horarios");
  console.log("2. Calificar estudiantes");
  console.log("3. Volver al menú principal");
}

function mostrarMenuAdministrativos() {
  console.log("\nMenú para Administrativos:");
  console.log("1. Ver reportes");
  console.log("2. Gestionar recursos");
  console.log("3. Volver al menú principal");
}

function verCursos() {
  console.log("\nLista de cursos disponibles:");
  console.log("- Matemáticas");
  console.log("- Historia");
  console.log("- Ciencias");
}

function inscribirseEnCurso() {
  let curso = prompt("Introduce el nombre del curso en el que deseas inscribirte:");
  console.log(`Te has inscrito en el curso de ${curso}`);
}

function manejarEleccion(opcion, id) {
  switch (opcion) {
    case 1:
      console.log(`\nIngresaste como Estudiante con ID: ${id}`);
      manejarSubmenu(mostrarMenuEstudiantes, id);
      break;
    case 2:
      console.log(`\nIngresaste como Profesor con ID: ${id}`);
      manejarSubmenu(mostrarMenuProfesores, id);
      break;
    case 3:
      console.log(`\nIngresaste como Administrativo con ID: ${id}`);
      manejarSubmenu(mostrarMenuAdministrativos, id);
      break;
    case 4:
      console.log("\nHasta pronto");
      return true; // Salir del bucle
    default:
      console.log("\nOpción no válida, introduce una opción válida");
      return false; // Opción no válida, continuar el bucle
  }
  return true;
}

function manejarSubmenu(mostrarSubmenu, id) {
  let opcionValida = false;
  while (!opcionValida) {
    mostrarSubmenu();
    let opcionSubmenu = parseInt(prompt("Introduce tu opción:"));
    opcionValida = manejarOpcionSubmenu(opcionSubmenu, id);
  }
}

function manejarOpcionSubmenu(opcionSubmenu, id) {
  switch (opcionSubmenu) {
    case 1:
      verCursos();
      return false; 
    case 2:
      inscribirseEnCurso();
      return false; // Continuar en el submenú
    case 3:
      console.log("Ver notas...");
      return false; // Continuar en el submenú
    case 4:
      console.log("Ver notas de materia...");
      return false; // Continuar en el submenú
    case 5:
      console.log("\nVolviendo al menú principal");
      return true; // Volver al menú principal
    default:
      console.log("\nOpción no válida, introduce una opción válida");
      return false; // Opción no válida, continuar el bucle del submenú
  }
}

function pedirOpcionValida(id) {
  let opcionValida = false;
  while (!opcionValida) {
    mostrarMenu();
    let opcion = parseInt(prompt("Introduce tu opción (1-4):"));
    opcionValida = manejarEleccion(opcion, id);
  }
}

pedirOpcionValida(id);

console.log("\nPrograma finalizado.");
