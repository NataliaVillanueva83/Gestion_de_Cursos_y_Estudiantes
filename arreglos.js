const estudiantes=[
    {
        id: 1,
        nombre: "Juan Pablo Perez",
        fechaNacimiento: "12/11/2000",
        domicilio: "Rodriguez 445",
        email: "perezjuan@gmail.com"    
    },
{
    id: 2,
    nombre: "Maria Ana Martinez",
    fechaNacimiento: "2/08/2000",
    domicilio: "Av. Luis Miguel de la Madrid 345",
    email: "martinamaria@gmail.com"
},
{
    id: 3,
    nombre: "Pedro Pablo Rodriguez",
    fechaNacimiento: "15/05/1995",
    domicilio: "Av. España 567",
    email: "rodriguezpedro@gmail.com"
},
{
    id: 4,
    nombre: "Lucia Martinez Garcia",
    fechaNacimiento: "10/02/1998",
    domicilio: "Calle Oscar Arroyo 234",
    email: "garcialucia@gmail.com"
},
{
    id: 5,
    nombre: "Jose Maria Garcia",
    fechaNacimiento: "25/10/1993",
    domicilio: "Paseo de la Castellana 678",
    email: "garciajose@gmail.com"
},
{
    id: 6,
    nombre: "Ana Maria Gonzalez",
    fechaNacimiento: "08/09/1991",
    domicilio: "Av. Flores 789",
    email: "gonzalezana@gmail.com"
}
];

const carreras = [
    {
        
    nombre: "Tecda",

    estudiantes: [], //solo agregamos id de estudiante para saber que esta inscripto en la carrera

    materias: [ {
            nombre: "EDI I",
            profesor: "Giselle Keimel",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Ingles tecnico I",
            profesor: "Silvina Gonzalez Formaini",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Sistemas de computacion",
            profesor: "Juan Toloza",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Programacion",
            profesor: "Lucas Salvatori",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Analisis Matematico I",
            profesor: "Jorge Bruno",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Administracion de las Organizaciones",
            profesor: "Mercedes Moreno",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Algebra",
            profesor: "Jose Meana",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Metodologia de la investigacion",
            profesor: "Fanny Florin",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Probabilidad y estadistica",
            profesor: "Jose Meana",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Analisis Matematico II",
            profesor: "Jose Meana",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Ingles tecnico II",
            profesor: "Silvina Gonzalez Formaini",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "EDI II",
            profesor: "Giselle Keimel",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Sistemas Operativos",
            profesor: "Lucas Salvatori",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Base de Datos",
            profesor: "sin asignar",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Analisis de Sistemas",
            profesor: "sin asignar",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Programacion Orientada a Objetos",
            profesor: "sin asignar",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Base de Datos",
            profesor: "sin asignar",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Seminario de Programacion",
            profesor: "sin asignar",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Investigacion Operativa",
            profesor: "sin asignar",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Economia Empresarial",
            profesor: "sin asignar",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Teleinformatica",
            profesor: "sin asignar",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Practica Profesional",
            profesor: "sin asignar",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Diseño e Implementacion de Sistemas",
            profesor: "sin asignar",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "Gestion de Base de Datos",
            profesor: "sin asignar",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        },
        {
            nombre: "EDI III",
            profesor: "sin asignar",
            capacidad: 20,
            estudiantes: [
                //{id: 22222222, calificaciones:[]}
            ]
        }
    ]
    }

    ]


const profesores = [
    {
        id: 21,
        nombre: "Silvina Gonzalez Formaini",
        
    },
    {
        id: 31,
        nombre:  "profesor Juan Toloza",
        
    },
    {
        id: 41,
        nombre: "profesor Lucas Salvatori",
       
    },
    {
        id: 51,
       nombre: "profesor Jorge Bruno",
        
    },
    {
        id: 61,
        nombre: "profesoraa Mercedes Moreno",
        
    },
    {
        id: 71,
       nombre: "profesor Jose Meana",
        
    },
    {
        id: 81,
        nombre: "profesora Fanny Florin",
        
    },
    {
        id: 91,
        nombre: "profesor juan perez",
        
    },
    {
        id: 101,
       nombre: "profesor felipe santos",
        
    },
    {
        id: 102,
       nombre: "profesora Silvina Gonzalez Formaini",
        
    },
    {
        id: 103,
       nombre: "profesora josefa ruta",
        
    },
    {
        id: 104 ,
        nombre: "profesor Lucas Salvator",
        
    },
]

const administrativos = [
    {

    id: 201,
    nombre: "erika rivas",
},
{
    id: 202,
    nombre: "teresa retondo",


},
]


export {estudiantes,profesores, carreras}