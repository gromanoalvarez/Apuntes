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

// //OBJETOS JSON o literales

// Formato para trabajar con datos/objetos
//En Internet el uso más importante es el de generar datos en el backend y enviarlos a las aplicaciones frontend. El flujo sería el siguiente:
// Las aplicaciones frontend requieren datos para representar al usuario.
// Mediante Javascript realizan solicitudes HTTP a un endpoint (URL) en el backend. Estas solicitudes se realizan de manera asíncrona mediante Ajax.
// El backend recibe la solicitud sobre el dato que se requiere desde el frontend, o la operación que se desea realizar (ediciones, inserciones, etc.)
// El backend realiza la operación, enviando el resultado al frontend en formato JSON.
// El frontend recibe el JSON y generalmente construye mediante Javascript el HTML necesario para representar esa información convenientemente al usuario.
/* 
es lo que esta entre { }
las propiedades van con sintaxis de ""
los valores si son numericos o booleanos su sintesis es normal pero si es String necesita ""
todo    Los arrays van "propiedad":["nombre", "apellido"]
 se puede extender una propiedad dentro de otra y asi sucesivamente de forma infinita
 TODoa propiedad se separa con , coma (Menos la ultima)
*/
//? var objeto = JSON.parse('{"nombre": "juan", "edad": 33, "casado": false}');
// Esta función permite convertir una cadena en formato JSON en una variable Javascript que contiene la representación del valor de esa cadena.

//todo  Esta función Javascript convierte un objeto, un array u otro valor en su representación como cadena en formato JSON.
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
    //puedo crear funciones, arrays, metodos, etc dentro del OBJETO COCHE
    "mostrarDatos" () {
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    "propiedadUno": "valor aleatorio"
};

document.write("<h4> Mi objeto es coche: modelo " + coche.modelo + ", maxima velocidad de " + coche.maxima + ", antiguedad " +
    coche.antiguedad + "</h4>")

coche.mostrarDatos(); // se visualiza por console.log como esta declarado dentro del metodo.
console.log(coche);


// ! AJAX Y FETCH que es la nueva función de Javascript para el acceso a datos del servidor, que devuelve una promesa.

// todo     Fetch es una función a la que le indicamos la URL a la que queremos acceder.
//?              fetch('https://url/del/servicio/web)
// todo             Esta función nos devuelve una promesa, que debemos que esperar que se resuelva. Una vez resuelta obtenemos uan respuesta, que nos indica los datos de la solicitud HTTP que se acaba de realizar.

//* .then(response => {
//*     Código a ejecutar con la respuesta
//* })
// Ahora bien, si esa respuesta era en formato JSON podemos acceder al objeto Javascript que representa ese JSON por medio del método response.json(). La dificultad es que este método devuelve a su vez otra promesa, que tenemos que encadenar.
// El código completo de encadenar dos promesas sería el siguiente:

//* fetch('https://url/del/servicio/web')
//   .then(response => response.json())
//   .then(json => {
//   // aquí tenemos el parámetro json que contien el dato que nos ha devuelto el servicio web.
//   // podemos hacer cualquier cosa con él...
//   console.log(json)
//   });


/* La peticion de datos es ASINCRONA por ende se puede usar ASYNC-AWAIT FETCH(URL); ho sino tambien  PROMISE(RESOLVE, REJECT) */
async function obtenerDatos() {
    const response = await fetch("http://127.0.0.1:5500/Frameworks/repasoJs/datos.json");
    /*    const json = await response.text(); //1ro lo puedo obtener como texto
    //console.log(json)
    console.log(JSON.parse(json)); // y 2do lo puedo pasar a json
    console.log(JSON.stringify(json)); // 3ro lo puedo volver a pasar a string texto
    console.log(JSON.nombre);*/
    //la segunda opcion mas rapida es directamente hacer response.json y pedirlo en ese formato
    const json = await response.json();
    //Luego puedo pedir valores del json
    console.log(json);
    console.log(json.nombre);
    console.log(json.experiencia);
    //visualizar un array del json
    json.experiencia.forEach(elemento => console.log(elemento.empresa));
    console.log(json.direccion["pago_agua"]);
    //ojo no confundir: json es mi documento y JSON es la clase que me permite invocar metodos a traves del . punto
}
obtenerDatos();

//! PROMESAS ... Promise (resolve, reject)-(then/catch)

//todo           para peticiones ASINCRONA (como peticiones AJAX), pueden TARDAR UN RATO en devolver un resultado o no devolverlo, son valores que pueden estar disponibles ahora, en futuro o nunca, PROMETE QUE LLEGA UN DATO O UN ERROR */

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => { //simula el retraso que sucederia al solicitar algo al servidor
        let saludo = "Hola buen dia!"
        saludo = false; // para que active el reject
        if (saludo) {
            resolve(saludo); // QUE HA RESUELTO LA PROMESA

        } else {
            reject("no hay saludo disponible"); // QUE NO HA RESUELTO LA PROMESA
        }

    }, 3000); // espera de tiempo 3 SEG propiedad del setTimeout
});

// ejecuta la promesa saludar y cuando tenga el RESULTADO que se ejecute el THEN
saludar.then(resultado => {
    alert(resultado);
});
saludar.catch(error => { // ! CAPTURA EL ERROR del REJECT
    alert(error);
});