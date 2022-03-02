/**
*!                  API (Application Programming Interface)
 * 
 * TODO     Permite conectarse  a recursos y "consumir una base de datos", que otros ya han desarrollado, como usar los mapas que ya desarrollo Google Maps.
 ** Hace que tu aplicación pueda integrarse a otros proyectos y otras aplicaciones. Por eso es indispensable que tengan una Documentación a modo de guía para implementar su uso.
  
 ** API:
  INTERFAZ (Capa de "abstracción" para que dos entidades se comuniquen y sin necesidad de saber la mecánica que corre por detrás) que permite la comunicación entre APLICACIONES.
  Ejemplos: API DOM (manipula documentos), Fetch API (obtiene datos del servidor), Canvas (para dibujar y manipular gráficos). Los lenguajes de programación tienen su API con "métodos".
 
 * Las APIs puede ser:
 ** a) Públicas: de común acceso (gratis o pagas).
 ** b) Privadas: requieren autenticación, un objeto TOKEN (En formato jwt)
 ** C) Locales: las que se ejecutan dentro del mismo entorno.
 ** D) Remotas: Te comunicas con una app que esta en otro punto del mundo. Pueden utilizar Servicios Web (eligiendo entre "protocolo SOAP" o "arquitectura REST").

 ** SERVICIO WEB:
  Permite la comunicación en una red y utiliza el "PROTOCOLO HTTP" que permite manejar información a través de internet mediante PETICIONES (req) y RESPUESTAS (res).

 ==============================================================================
  
 *!              Protocolo SOAT (Simple Object Access Protocol)

 Protocolo para el diseño y construcción de Servicios Web "solamente por medio de XML", lo que le permite ser independiente del lenguaje y la plataforma.

  ==============================================================================
  
 *!              REST (REpresentational State Transfer)

  Es una ARQUITECTURA DE SOFTWARE (forma en que esta diseñado un sistema, como estan organizados los componentes, como se comunican entre sí y que funciones cumplen) Estandart de restricciones y recomendaciones que utiliza el "protocolo HTTP" para intercambio de datos. 

  ** Seis Principios de RESTRICCIONES ARQUITECTÓNICAS
1- Uso de una Interfaz Uniforme: Estandart de recursos identificables y accesibles de forma "únicas" mediante la URL y con protocolo http (get, post, put, delete).
2- Modelo Cliente (preocuparse por la interfaz y recopilacion de solicitudes) Servidor (debe preocuparse por el acceso a los datos y la seguridad o tokens). 
3- Operaciones sin estado (stateless): cada petición debe ser independiente y no dependerá de peticiones anteriores.
4- Almacenamiento en Caché (cacheability): Algunas respuestas pueden ser almacenadas en cache, puede reducir las cargas del servidor cuando las respuestas no llegan.
5- Sistema de Capas: Múltiples capas de servidores cada una con una tarea específica para permitir escalabilidad. Cada capa debe comunicarse con la capa adyacente.
6- Código bajo demanda: un servidor devolverá representaciones estáticas de recursos en formato XML o Json que es el mas utilizado.

 ==============================================================================

*!              API REST:

Resumiendo se maneja por medio de:
*todo a) MÉTODOS de "PETICIONES" HTTP (REQ, request): 
Permiten interactuar con la Api rest.
*! Tiene VERBOS HTTP que son equivalentes al  "C-R-U-D"  de la Base de Datos
          POST: Enviar información por body en json - Create
          GET: Solicitar información - Read
          PUT: Reemplazar información existente - Update
          PATCH: Actualiza parcialmente información existente - Update
          DELETE: Borrar información o recurso - Delete

*todo b) ENDPOINT (LA URL COMPLETA):
*?       http://localhost:3000/api/articulos/
Permite consultar directamente un recurso o una lista de ellos.
*todo   IDENTIFICADOR UNICO DE "RECURSO" (URI):
*?                            /api/articulos/

*todo c) CÓDIGOS DE ESTADO de "RESPUESTA" HTTP (RES, response):
Cuando solicitas información a la API REST el Servidor Web puede devolver: 
200: Respuesta Exitosa,
300: Redirección,
400: Solicitud inválida,
500: Error en el Servidor.
Ver en detalle los códigos de respuesta en :
*?  https://developer.mozilla.org/es/docs/Web/HTTP/Status
*?  https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP

==============================================================================

*!            API RESTful:

 * Es cuando creas un Servicio Web en su "Backend" implementas la arquitectura REST para transferir DATOS mediante "PROTOCOLO HTTP"

          (CLIENTE: req-> http <-res: Servidor).
 *
 * ! EJEMPLO CRUD > Backend/routes/article.js
 * router.métodoHttp('URI', controller.acción);
*? router.post('/save', ArticleController.save); ////CREATE
*? router.get('/article/:id', ArticleController.getArticle); ////READ
*? router.put('/article/:id', ArticleController.update); ////UPDATE
*? router.delete('/article/:id', ArticleController.delete);////DELETE
 * 
 * todo     Estos endpoint se pueden poner a prueba con "Postman"

==============================================================================

 *!                COMO CONSUMIR APIs: 

*?    github.com/public-apis/public-apis
** Elegir una y ver su documentación para obtener su ENDPOINT: 
Por ejemplo endpoint de api de gatos... 
*?  https:/cat.fact.herokuapp.com/facts
Esto devuelve un JSON con todos los datos!

Otro ejemplo endpoint de api para exchange rate usd...
*?  https://api.exchangerate-api.com/v4/latest/USD
Esto devuelve un JSON con todos los datos en equivalente un dolar con respecto a otras monedas!

Api del Banco Central de la República Argentina oficial...
*?  https://api.estadisticasbcra.com
Para que me devuelva un Json debo primero "autorizarme con un TOKEN"
Authorization: BEARER {TOKEN}
Entonces hay que registrarse asi nos llega el token.
Ahora podemos entrar a las "Consultas Disponibles" o "recursos" URIs:
*?  https://api.estadisticasbcra.com/usd
          o
*?  https://api.estadisticasbcra.com/inflacion_mensual_oficial
Dentro de postman en la pestaña de Authorization selecciono BEARER TOKEN y pegamos el token que nos llego al registrarnos y luego nos muestra el Json con el recurso que trae cada endpoint.

==============================================================================
** FORMATO XML (Extensible Markup Language):
  Formato tradicional de etiquetas:
  <Company>
    <Id>1</Id>
    <Name>Germán</Name>
    <Sector>Desarrollo Web</Sector>
  </Company>  
==============================================================================
 ** FORMATO JSON (javaScript Object Notation): 
 Formato mas usado:
     {
         "id":1,
         "name":'Germán',
         "sector":'Desarrollo Web'
     }
==============================================================================
 */