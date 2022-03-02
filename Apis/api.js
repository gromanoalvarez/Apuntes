/**
*!                  API (Application Programming Interface)
 * 
 * TODO     Permite conectarse  a recursos y "consumir una base de datos", que otros ya han desarrollado, como usar los mapas que ya desarrollo Google Maps.
 ** Hace que tu aplicación pueda integrarse a otros proyectos y otras aplicaciones. Por eso es indispensable que tengan una Documentación a modo de guía para implementar su uso.
  
 ** API:
  INTERFAZ (Capa de "abstracción" para que dos entidades se comuniquen sin necesidad de saber la mecánica que corre por detrás) que permite la comunicación entre APLICACIONES.
  Ejemplos: API DOM (manipula documentos), Fetch API (obtiene datos del servidor), Canvas (para dibujar y manipular gráficos). Los lenguajes de programación tienen su API con "métodos".
 
 * Las APIs puede ser:
 ** a) Públicas: de común acceso (gratis o pagas).
 ** b) Privadas: requieren autenticación, un objeto TOKEN (En formato jwt)
 ** C) Locales: las que se ejecutan dentro del mismo entorno.
 ** D) Remotas: Te comunicas con una app que esta en otro punto del mundo. 

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
 
** Las APIs pueden utilizar "Servicios Web", comunicación en una red utilizando el "PROTOCOLO HTTP" mediante PETICIONES (req) y RESPUESTAS (res). Esto puede hacerlo eligiendo entre "protocolo SOAP" o "arquitectura REST". 

 ==============================================================================

  *!                     PROTOCOLO HTTP:

  ** El Protocolo de transferencia de hipertexto (Hypertext Transfer Protocol) es el protocolo de comunicación que permite las transferencias de información a través de archivos (XHML, HTML…) en la World Wide Web.
  HTTP es un protocolo "sin estado", por lo que "no guarda ninguna información sobre conexiones anteriores". Aunque las aplicaciones web necesitan frecuentemente mantener estado, la noción de sesión, para esto se usan las "cookies", que es información que un servidor puede almacenar en el sistema cliente. Las cookies también permite rastrear usuarios, ya que pueden guardarse en el cliente por tiempo indeterminado.
  
  Posee, Métodos de petición (get, post, put, delete), identificador de recursos, códigos de respuesta (del 200 al 500) y cabeceras.

*todo a) MÉTODOS de "PETICIONES" HTTP (REQ, request): 
*! Tiene VERBOS HTTP que son equivalentes al  "C-R-U-D"  de la Base de Datos
          POST: Enviar información por body en json - Create
          GET: Solicitar información - Read
          PUT: Reemplazar información existente - Update
          DELETE: Borrar información o recurso - Delete

*todo b) ENDPOINT (LA URL COMPLETA):
*?       http://localhost:3000/api/articulos/
Permite consultar directamente un recurso o una lista de ellos.
*todo   IDENTIFICADOR UNICO DE "RECURSO" (URI):
*?                            /api/articulos/

*todo c) CÓDIGOS DE ESTADO de "RESPUESTA" HTTP (RES, response):
Cuando solicitas información a la API REST el Servidor Web puede devolver: 
200+: Respuesta Exitosa,
300+: Redirección,
400+: Solicitud inválida,
500+: Error en el Servidor.
Ver en detalle los códigos de respuesta en :
*?  https://developer.mozilla.org/es/docs/Web/HTTP/Status
*?  https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP

*todo d) CABECERAS:
Son los "metadatos" que se envían en las peticiones o respuesta HTTP para proporcionar información esencial sobre la transacción en curso. Cada cabecera es especificada por un nombre de cabecera seguido por dos puntos, un espacio en blanco y el valor de dicha cabecera seguida por un retorno de carro seguido por un salto de línea. Se usa una línea en blanco para indicar el final de las cabeceras. Si no hay cabeceras la línea en blanco debe permanecer.

Las cabeceras le dan gran "flexibilidad al protocolo permitiendo añadir nuevas funcionalidades".

Las cabeceras pueden tener metadatos que tienen que ser procesados por el cliente (ej. en respuesta a petición se puede indicar el tipo del contenido que contiene), por el servidor (ej. tipos de representaciones aceptables por el cliente del contenido que pide) o por los intermediarios (ej. como gestionar el cacheo por parte de los proxys)

 * ! Ejemplo de CABECERAS (header) implementadas en el CORS > Backend/app.js
*todo     CORS (Intercambio de Recursos de Origen Cruzado) CONTROL DE ACCESO CRUZADO entre dominio para servidores web y transferencia segura de datos en dominios cruzados entre navegadores y servicios web.
**      Esto se debe a que algunas APIs por razones de seguridad, tienen restricciones en las solicitudes HTTP, entonces si no tienes el CORS no podras hacerles solicitud http desde otro dominio.
*?       Utiliza cabeceras HTTP para permitir que un agente solicite un recurso desde un dominio distinto al que lo generó. 
app.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*'); //  El '*' significa cualquier cliente
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next(); //Permite pasar del middleware
});

  ==============================================================================
    
 *!              Protocolo SOAP (Simple Object Access Protocol)

 Protocolo para el diseño y construcción de Servicios Web "solamente por medio de formato XML", lo que le permite ser independiente del lenguaje y la plataforma.

 ** FORMATO XML (Extensible Markup Language):
  Formato tradicional de etiquetas:
  <Company>
    <Id>1</Id>
    <Name>Germán</Name>
    <Sector>Desarrollo Web</Sector>
  </Company>  

==============================================================================
  
 *!              REST (REpresentational State Transfer)

  Es una ARQUITECTURA DE SOFTWARE (forma en que esta diseñado un sistema, como estan organizados los componentes, como se comunican entre sí y que funciones cumplen) Estandart de restricciones y recomendaciones que utiliza el "protocolo HTTP" para intercambio de datos.  Mayormente se utiliza formato JSON.

  ** Seis Principios de RESTRICCIONES ARQUITECTÓNICAS
1- Uso de una Interfaz Uniforme: Estandart de "recursos" identificables y accesibles de forma "únicas" mediante la URL y con "protocolo http" (con verbos get, post, put, delete).
2- Modelo Cliente (que solo debe preocuparse por la interfaz y recopilación de solicitudes) Servidor (solo debe preocuparse por el acceso a los datos y la seguridad o tokens). 
3- Operaciones sin estado (stateless): cada petición debe ser independiente y no dependerá de peticiones anteriores.
4- Almacenamiento en Caché (cacheability): Algunas respuestas pueden ser almacenadas en cache, puede reducir las cargas del servidor cuando las respuestas no llegan.
5- Sistema de Capas: Múltiples capas de servidores cada una con una tarea específica para permitir escalabilidad. Cada capa debe comunicarse con la capa adyacente.
6- Código bajo demanda: un servidor devolverá representaciones estáticas de recursos en formato XML o Json, que es el más utilizado.

 ** FORMATO JSON (javaScript Object Notation): 
 Formato mas usado:
     {
         "id":1,
         "name":'Germán',
         "sector":'Desarrollo Web'
     }

==============================================================================

*!            API RESTful:

 * Es cuando creas un "Servicio Web" en su "Backend" implementas la "arquitectura REST" para transferir DATOS mediante "PROTOCOLO HTTP".

          (CLIENTE: req-> http <-res: Servidor).
 *
 * ! Ejemplo de CRUD implementado en API RESTful > Backend/routes/article.js
 * todo     CRUD (Create, Read, Update, Delete) es un acrónimo para las maneras en las que se puede operar sobre información almacenada en una base de datos.  
 * 
 * Un CRUD creado con Express en la API RESTful tiene el formato:
** router.verboHTTP('URI', controller.acción);
*? router.post('/save', ArticleController.save); ////CREATE
*? router.get('/article/:id', ArticleController.getArticle); ////READ
*? router.put('/article/:id', ArticleController.update); ////UPDATE
*? router.delete('/article/:id', ArticleController.delete);////DELETE
 * 
 * todo     Estos endpoint se pueden poner a prueba con "Postman"

 ==============================================================================


 */