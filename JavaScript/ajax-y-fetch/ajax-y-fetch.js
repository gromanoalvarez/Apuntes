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
