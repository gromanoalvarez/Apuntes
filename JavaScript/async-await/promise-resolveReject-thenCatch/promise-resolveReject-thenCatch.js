
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