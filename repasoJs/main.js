// alert('hola mundo')

var nombre = "German";
var altura = 176;

var concatenacion = nombre + " mide " + altura + " cm";

// añade el nombre dentro del html
//se visualiza dentro del documento html al principio o al final segun donde se haya hecho  el enlace al script
document.write("Ahora ingreso desde el document.write= " + concatenacion + "<br>");


/*
// busca el id datos y devuelve su contenido
var datos = document.getElementById("datos");

//ingreso info desde el js al id="datos" del html usando innerHTML 
datos.innerHTML = "agrego con el innertHTML A UNA VARIABLE";
//LA SOBREESCRIBO
// para activar ${variable} debo usar comilla invertidas: `` 
datos.innerHTML = `
<h1> Desde js:</h1>
<h2>Mi nombre es ${nombre}</h2>
<h3> Mido: ${altura} cm<h3>
`;

if (altura >= 160) {
    //ojo, el innetHTML sobreescribe, si quiero concatener uso el operador +=
    datos.innerHTML += `<h1>Eres alto</h1>`
} else {
    datos.innerHTML += `<h1>Eres Bajo</h1>`
}

for (var i = 2020; i < 2022; i++) {
    //bloque de instrucciones
    datos.innerHTML += `<h2>Estamos en el año: </h2>` + i;
}

*/
function muestraMiNombre(nombre, altura) {
    var misDatos = `
    <h1> Desde js:</h1>
    <h2>Mi nombre es ${nombre}</h2>
    <h3> Mido: ${altura} cm<h3>
    `;
    //con el return saco un resultado hacia afuera de la funcion
    return misDatos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraMiNombre("german", 180);
}

imprimir();

var nombres = ["Victor", "Antonio", "Joaquin"]; //asi se denomina un array, que es una coleccion de datos, multiples valores
// alert(nombres[2]);

document.write('<h1>Listado de nombres</h1>')
    //opcion 1 array comun
for (i = 0; i < nombres.length; i++) {
    document.write("Mi array comun contiene a: " + nombres[i] + '<br>');
}

//opcion 2 con foreach + funcion que envia parametro nombre

nombres.forEach(function(nombre) {
    document.write("foreach " + nombre + '<br>');
});

//opcion 3 con ARROW FUNCTION(suplanta las funciones anonimas y comprende el contexto general o ambito de la variable)

nombres.forEach(nombre => document.write("arrow function " + nombre + '<br>'));

// //OBJETOS LITERALES O JSON
// En Internet el uso más importante es el de generar datos en el backend y enviarlos a las aplicaciones frontend. El flujo sería el siguiente:
// Las aplicaciones frontend requieren datos para representar al usuario.
// Mediante Javascript realizan solicitudes HTTP a un endpoint (URL) en el backend. Estas solicitudes se realizan de manera asíncrona mediante Ajax.
// El backend recibe la solicitud sobre el dato que se requiere desde el frontend, o la operación que se desea realizar (ediciones, inserciones, etc.)
// El backend realiza la operación, enviando el resultado al frontend en formato JSON.
// El frontend recibe el JSON y generalmente construye mediante Javascript el HTML necesario para representar esa información convenientemente al usuario.

// var objeto = JSON.parse('{"nombre": "juan", "edad": 33, "casado": false}');
// Esta función permite convertir una cadena en formato JSON en una variable Javascript que contiene la representación del valor de esa cadena.

// Esta función Javascript convierte un objeto, un array u otro valor en su representación como cadena en formato JSON.
// var coche = {
//     modelo: "Ford Focus",
//     anioFabricacion: "2020",
//     motorizacion: 'Gasolina'
//   }
//   var cadena = JSON.stringify(coche);

document.write('<hr>' + "<H1>Objetos JSON o Objetos Literales</H1>")

var coche = {
    "modelo": "Mercedes Clase A",
    "maxima": 500,
    "antiguedad": 2020,
    //puedo crear funciones y metodos dentro del OBJETO
    "mostrarDatos" () {
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    "propiedadUno": "valor aleatorio"
};

document.write("<h4> Mi objeto es coche: modelo " + coche.modelo + ", maxima velocidad de " + coche.maxima + ", antiguedad " +
    coche.antiguedad + "</h4>")

coche.mostrarDatos(); // se visualiza por console.log como esta declarado dentro del metodo.
console.log(coche);


// AJAX Y FETCH que es la nueva función de Javascript para el acceso a datos del servidor, que devuelve una promesa.

// Fetch es una función a la que le indicamos la URL a la que queremos acceder.

// fetch('https://url/del/servicio/web)
// Esta función nos devuelve una promesa, que debemos que esperar que se resuelva. Una vez resuelta obtenemos uan respuesta, que nos indica los datos de la solicitud HTTP que se acaba de realizar.

// .then(response => {
//     // Código a ejecutar con la respuesta
// })
// Ahora bien, si esa respuesta era en formato JSON podemos acceder al objeto Javascript que representa ese JSON por medio del método response.json(). La dificultad es que este método devuelve a su vez otra promesa, que tenemos que encadenar.

// El código completo de encadenar dos promesas sería el siguiente:

// fetch('https://url/del/servicio/web')
//   .then(response => response.json())
//   .then(json => {
//   // aquí tenemos el parámetro json que contien el dato que nos ha devuelto el servicio web.
//   // podemos hacer cualquier cosa con él...
//   console.log(json)
//   });