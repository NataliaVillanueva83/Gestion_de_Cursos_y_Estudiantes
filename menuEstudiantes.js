//const prompt = require ("prompt-sync")();
import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();
import { alumnos, materias,profesores,notas,cursos } from "./buscarAlumno.js";
import {  agregarAlumno }from "./buscarAlumno.js";
import { eliminarAlumno }from "./buscarAlumno.js";
 
      
const maximoAlumnosPorClase = 5


function menu (){

console.log("menu: ");
console.log("1.agregar alumno ");
console.log("2.eliminar alumno ");
console.log("3.agregar materia ");
console.log("4.agregar profesor ");
console.log("5.agregar nota ");
console.log("6.ver alumnos ");
console.log("7.ver materias ");
console.log("8.ver profesores ");
console.log("9.ver notas ");
console.log("10.asignar curso ");
console.log("11.salir ");


console.log(" ----------- ")
const opcion = prompt("ingrese una opcion: ")
console.log(" ----------- ")

switch (opcion) {
    case "1":
      const nombre = prompt("Ingrese nombre del alumno: ");
      const apellido = prompt("Ingrese apellido del alumno: ");
      agregarAlumno( nombre, apellido );
      break;
    case "2":
    eliminarAlumno();
    break;
    case "3":
    agregarMateria();
    break;
    case "4":
    agregarProfesor();
    break;
    case "5":
    agregarNota();
    break;
    case "6":
    verAlumnos();
    break;
    case "7":
    verMaterias();
    break;
    case "8":
    mostrarProfesor();
    break;
    case "9":
    verNotas();
    break;
    case "10":
    asignarClase();
    break;
    case "11":
    console.log("hasta pronto");
    return;
    default:
    console.log("opcion invalida");
        
}

menu();

  function agregarMateria() {
    const nombre = prompt("Ingrese nombre de la materia: ");
    materias.push({ nombre });
    console.log(" ----------- ")
    console.log("Materia agregada con éxito");
    console.log(" ----------- ")
  }
  
  function agregarProfesor() {
    const nombre = prompt("Ingrese nombre del profesor: ");
    const apellido = prompt("Ingrese apellido del profesor: ");
    profesores.push({ nombre, apellido });
    console.log("Profesor agregado con éxito");
  }
  
  function agregarNota() {
    const alumno = prompt("Ingrese nombre del alumno: ");
    const materia = prompt("Ingrese nombre de la materia: ");
    const nota = prompt("Ingrese nota: ");
    notas.push({ alumno, materia, nota });
    console.log("Nota agregada con éxito");
  }
  
  function verAlumnos() {
    if( alumnos.length == 0 ){
        console.log(" ----------- ")
        console.log(" No hay alumnos. ");
    } else  {
        console.log(" ----------- ")
        console.log("alumnos:")
        alumnos.forEach((alumno, index) => {
            console.log(`${index + 1}. ${alumno.nombre} ${alumno.apellido}`);
        });
    }
    console.log(" ----------- ")
  }
  
  function verMaterias() {
    console.log("Materias:");
    materias.forEach((materia, index) => {
      console.log(`${index + 1}. ${materia.nombre}`);
    });
  }
  
  function mostrarProfesor() {
    console.log("Profesores:");
    profesores.forEach((profesor, index) => {
      console.log(`${index + 1}. ${profesor.nombre} ${profesor.apellido}`);
    });
  }
  
  function verNotas() {
    console.log("Notas:");
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. Alumno: ${nota.alumno}, Materia: ${nota.materia}, Nota: ${nota.nota}`);
    });
  }

  function asignarClase() {
    const nombre = prompt("Ingrese nombre del alumno: ");
    const apellido = prompt("Ingrese apellido del alumno: ");
    const cursoAsignado = prompt("introduce el nombre del curso ");
     let curso = cursos.find(c => c.nombreCurso === cursoAsignado);
      
      if (curso) {
        if (curso.alumnos.length < maximoAlumnosPorClase) {
          curso.alumnos.push({  nombre:nombre,  apellido:apellido });
          console.log(" ----------- ")

          console.log(`Alumno ${nombre} ${apellido} asignado a ${cursoAsignado}.`);
        } else {

          console.log(" ----------- ")

          console.log(`Curso ${cursoAsignado} ha alcanzado el máximo de alumnos.`);
        }
      } else {
        console.log(" ----------- ")
        
        console.log(`Curso ${cursoAsignado} no encontrado.`);
      }
    }
     
  } 
  menu();