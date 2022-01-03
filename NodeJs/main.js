/**             Backend con JS
 * 
 * Crear API RESTful con NodeJs:
 * Es Servicio web que le hacemos una PETICIÓN y devuelve un JSON!
 * Tiene URL endpoint, se le hace PETICIONES AJAX, ASINCRONAS O HTTP
 * Ya sea un CLIENTES REST, MOBIL O WEB SAP(con Angular, React o Vue)
 * +
 * Conexión a MongoDB mediante Mongoose.
 * +
 * CRUD de artículos.
 * +
 * Subida de archivos
 * +
 * Buscador
 * +
 * CORS
 * 
 * Con NodeJs con Js puedo trabajar en el servidor y CREAR SERVIDOR
 * 
 * 
 * ----------prueba de NODE-----------
 * 1. Abro la consola cmd 
 * 2. introduzco: node y se ejecuta el servidor:
 * 
 * Welcome to Node.js v16.13.1.
Type ".help" for more information.

 * Ahora Puedo ingresar sentencias y operaciones de js

 * para SALIR debo matar la consola con Ctrl+C
 * 
 * -------------creacion de proyecto NODE----
 * 1. Abro la consola cmd y me dirijo a la ubicacion de mi proyecto
 * 2. comando: npm init 
 * Sirve para ejecutar con node paquete de dependencias y librerias 
 * esto me saca un "asistente" y me pregunTA:
 *  cual es el nombre de la carpeta a generar, el repo, el autor, licencia,
 * completo todo lo que necesito y finalmente me consulta el JSON que va a generar y le doy OK
 * 3. se Genera el archivo JSON en el directorio indicado
 * 
 * 4. Instalar las DEPENDENCIAS, LIBRERIAS: 
 * ubicarse dentro de la carpeta backend y poner:
 * 
 *       npm install --save express
 *                  EXPRESS: 
 * Es un frameworks que funciona sobre NodeJs que permite GENERAR RUTAS y URLs que funcionan dentro del protocolo HTTP y recibe PETICIONES devuelve un resultado en JSON
 * (genera el package-loke.json y la carpeta node_modules para todas las dependencias)
 * 
 *       npm install --save body-parser
 *                  BODY-PARSER:
 * Permite cuando envio por un formulario, convierte los datos a un Json usable por Js
 *
 *         npm install --save mongoose
 *                  MONGOOSE:
 * ORM para utilizar con MongoDB para generar abstraccion de modelos para trabajar con la base de datos
 *
 *         npm install --save multiparty 
 *                  MULTIPARTY:
 * Libreria para lluvias de archivos, subir ficheros uploads, trabajar con el fails o con datos de tipo archivo
 * 
 *       npm install --save validator
 *                  VALIDATOR:
 * Libreria para Validacion de Datos del backend desde un formulario o peticion http
 * 
 *         npm install --save-dev modemon
 * Actualiza en la consola de Node constantemente los cambios en el js.
 * Asi reinicia el servidor automaticamente cuando hago cambios y los muestra
 * sin necesidad de cortarlo manualmente con Ctrl+c
 * Para usarlo: en el package.json creo el scripts start
 *  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
 * Luego en la ventana de Node ejecutar: npm start
  para lanzar la aplicacion con el nodemon

  
 *  CONECTAR NODEJS CON MONGODB:
 * 1. Abrir MongoD.exe en archivos de programa para activar MongoDB
 * 2. Crear el PUNTO DE ENTRADA, "Fichero principal index.js" donde vamos a crear el servidor para que escuche peticiones HTTP
 * 
 * 
 * 
 * 
 * 
*/