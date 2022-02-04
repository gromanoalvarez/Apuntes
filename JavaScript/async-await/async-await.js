
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