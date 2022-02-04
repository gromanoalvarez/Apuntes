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

//! opcion 2: FOREACH + funcion que envia parametro nombre

nombres.forEach(function(nombre) {
    document.write("foreach " + nombre + '<br>');
});

//opcion 3 con ARROW FUNCTION(suplanta las funciones anonimas y comprende el contexto general o ambito de la variable)

nombres.forEach(nombre => document.write("arrow function " + nombre + '<br>'));