// OBJETOS JSON o literales

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

