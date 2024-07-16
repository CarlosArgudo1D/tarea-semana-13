"use strict";

//----------------------------------------------------------------------------

//EJERCICIO 1 

//Mostrar en un alert: "Si se encuentra" o "No se encuentra"

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];

// Verificar si "Jose" está en el array
let encuentra = students.filter(function(item) {
    return item.toLowerCase() === "jose"; // Convertimos item a minúsculas para comparar correctamente
});

if (encuentra.length > 0) {
    alert("Se encuentra"); 
} else {
    alert("No se encuentra");
}

//----------------------------------------------------------------------------

//EJERCICIO 2 

//Escribir una función que reciba como parámetro una frase. 
//Separar por palabras y devolver el numero de palabras que tiene la frase:


function contarPalabras(frase) {
    // Utilizamos el método split() para dividir la frase en palabras
    let palabras = frase.split(' ');
    // Devolvemos la longitud del arreglo palabras, que representa el número de palabras
    return palabras.length;
}

let frase = 'La programación web es fundamental para el progreso';
let numeroPalabras = contarPalabras(frase);

alert(`La frase "${frase}" tiene ${numeroPalabras} palabras.`);


//---------------------------------------------------------------

//EJERCICIO 3 

function palabrasMasLargas(frase) {
    // Dividir la frase en palabras
    let palabras = frase.split(' ');

    // Filtrar las palabras que tienen más de 3 letras
    let palabrasLargas = palabras.filter(palabra => palabra.length > 3);

    // Devolver el arreglo con las palabras más largas
    return palabrasLargas;
}


let frase = 'La programación web es fundamental para el progreso';
let palabrasMasLargasArray = palabrasMasLargas(frase);

alert(palabrasMasLargasArray); 

//---------------------------------------------------------------------------

//EJERCICIO 4 

const programmingBooks = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Construction",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualization",
    "Site Reliability Engineering: How Google Runs Production Systems",
    "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Software",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language",
];

// Filtrar libros que contengan "Java" y mostrar alerta si se encuentran
const librosJava = programmingBooks.filter(function(book) {
    return book.toLowerCase().includes("java");
});

// Mostrar alerta con los títulos encontrados
if (librosJava.length > 0) {
    let mensaje = "Se encontraron los siguientes libros relacionados con Java en español:\n";
    librosJava.forEach(function(libro) {
        mensaje += "- " + libro + "\n";
    });
    alert(mensaje);
} else {
    alert("No se encontraron libros relacionados con Java");
};

//--------------------------------------------------------------------------------------

// EJERCICIO 5 

function convertirArrayAObjetos(arrayLibros, tituloBuscado) {
    // Array para almacenar los objetos convertidos
    let librosObjetos = [];

    // Recorremos el array de libros
    arrayLibros.forEach((titulo, index) => {
        // Creamos el objeto con id autoincremental y title normalizado
        let libroObjeto = {
            id: index + 1,
            title: titulo.charAt(0).toUpperCase() + titulo.slice(1).toLowerCase()
        };

        // Agregamos el objeto al array de objetos
        librosObjetos.push(libroObjeto);
    });

    // Convertimos el título buscado para comparar en minúsculas
    let tituloBuscadoLower = tituloBuscado.toLowerCase();

    // Buscamos el id correspondiente al título buscado
    let idBuscado = null;
    librosObjetos.forEach(libro => {
        if (libro.title.toLowerCase() === tituloBuscadoLower) {
            idBuscado = libro.id;
        }
    });

    // Devolvemos el id correspondiente al título buscado (null si no se encontró)
    return idBuscado;
}

// Ejemplo de uso con el array proporcionado
let libros = ["JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Construction",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualization",
    "Site Reliability Engineering: How Google Runs Production Systems",
    "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Software",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language"];
let tituloBuscado = "Java: The Complete Reference";  
let idEncontrado = convertirArrayAObjetos(libros, tituloBuscado);

alert(`El id del libro "${tituloBuscado}" es: ${idEncontrado}`);
