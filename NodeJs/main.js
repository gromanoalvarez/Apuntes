/** 
 * !            Backend con NodeJS
 * 
 * Con NodeJs usando JavaScript puedo CREAR SERVIDOR y Crear API RESTful.
 * 
 * Una API RESTful: Es una interfaz mediadora de un Servicio web que le hacemos PETICIONES AJAX, ASINCRONAS O HTTP y devuelve un JSON!
 * 
 * Puntos importantes:
 * Conexión a MongoDB mediante Mongoose.
 * +
 * CRUD
 * +
 * Subida de archivos
 * +
 * Buscador
 * +
 * CORS
 * 
  ======================================================
 * 
 * !      INSTALACIÓN de NodeJS:
 * 
 * ?  https://nodejs.org/es/
 * * (Descargar la version LTS que es la recomendada ya que la Actual esta a prueba y es inestable).
 * 
 * Si abro CMD e ingreso el comando 
 * ?  node --version
 *  Tengo instalada la versión:   v16.13.1
 * 
 * !    npm : Es el gestor de paquetes de NodeJS
 *  * Si abro CMD e ingreso el comando 
 * ?  npm --version
 *  Tengo instalada la versión:   8.3.0
 * 
  ======================================================
 * 
 * !         Ejecutar NodeJS
 * 1. Abro la consola cmd 
 * 2. Ejecutar el servidor
 * ?  node 
 * Nos responderá:
 Welcome to Node.js v16.13.1.
Type ".help" for more information.

 * 3. Ahora Puedo ingresar sentencias y operaciones de javaScript. Por ejemplo: 
*?  console.log("Hola Mundo")

 * * para SALIR debo matar la consola con Ctrl+C
 * * para SALIR debo matar la consola con Ctrl+C
 * * para SALIR debo matar la consola con Ctrl+C

  ======================================================
 * 
 * !       1. Creación de proyecto NodeJS
 * 
 ** 1. Abro la consola CMD y me dirijo a la ubicación de mi proyecto.

 ** 2. Ingreso el comando: 
*?      npm init 
 (Sirve para ejecutar con node paquete de dependencias y librerías).
 Esto me saca un "asistente" y requiere ingresar(opcionalmente) cual es el nombre de la carpeta a generar (Backend), descripción (Api RESTful del Master en Frameworks), entry point- fichero de entrada predeterminado (el index.js), el repositorio, el autor(Romano Alvarez German), licencia (MIT) entonces completo todo lo que necesito y finalmente me consulta el JSON que va a generar y le doy OK.

 ** 3. Como resultado se genera la carpeta (con el nombre que elegí: Backend) y el archivo predeterminado package.json:
 *?    Backend/package.json

 ** 4. Instalar las DEPENDENCIAS, LIBRERIAS: 
 * A través de CMD ubicarse dentro de la carpeta Backend y según requiera instalar con los siguientes comandos. Una vez instalada una dependencia se genera la carpeta para guardar todas las dependencias y el package-lock.json:
 * ?    Backend/node_modules/
 * ?    Backend/package-lock.json
 * 
 **                 NODEMON: (implementar ni bien hago el index.hs)
 *?         npm install --save-dev modemon
 * Actualiza constantemente y de forma automática la consola de NodeJS todos los cambios ni bien se realizan en el javaScript (cuando hago cambios, los muestra
 sin necesidad de cortar el servidor manualmente con Ctrl+c y reiniciar el npm start).
 * Para usarlo, en el package.json creo el scripts start:
*?  "scripts": {
*?    "start": "nodemon index.js",
*?    "test": "echo \"Error: no test specified\" && exit 1"
*?  },
 Luego en la ventana de NodeJS para lanzar la aplicación con el nodemon  ejecutar: 
 *?     npm start
 * 
 **                MONGOOSE: (ver uso en punto 2 y 5 cuando conecto servidor a la db o cuando hago el schema que tendran todos los artículos a guardar en la db)
 *   ?      npm install --save mongoose
 * ORM para utilizar con MongoDB para generar Interfaz y abstracción de modelos para trabajar con la base de datos. Para sacar, insertar, borrar o actualizar datos.
 * 
 *  *                EXPRESS:  (ver uso en punto 3 y 6, para crear el servidor y las rutas http)
 * ?      npm install --save express
 * Es un frameworks que funciona sobre NodeJs que permite GENERAR RUTAS y URLs que funcionan dentro del protocolo HTTP y recibe PETICIONES devuelve un resultado en JSON.
 * 
 * *                 BODY-PARSER:  (ver uso en punto 3, creando el servidor)
 *  ?     npm install --save body-parser
 * Permite cuando envie desde un formulario de web o desde postman, convierte  los datos ingresados por params a formato Json.
 *
 *  *                MULTIPARTY: (ver uso en punto 6, en las rutas)
 *  ?       npm install --save multiparty 
 * Librería para lluvias de archivos, subir ficheros uploads, trabajar con el fail o con datos de tipo archivo.
 * 
 *  *                VALIDATOR: (ver uso en punto 7, al guardar y actualizar un artículo en la db)
 *   ?    npm install --save validator
 * Librería para Validación de Datos del backend desde un formulario o petición http.
 * Ver todas las validaciones posibles en: 
 * ?  https://www.npmjs.com/package/validator
 * 
  ======================================================
  * 
 *!          2.  Conectar NodeJS con MongoDB usando mongoose:
 *!         (Conectar el servidor a la Base de Datos)

 * 1. Abrir Mongod.exe y dejar corriendo.
 * 2. Crear el PUNTO DE ENTRADA o "Fichero principal": index.js, donde vamos a crear el servidor para que escuche peticiones HTTP y va a tener la conexión a la Base de Datos.
 * ?  Backend/index.js
*todo      Dentro desarrollar la siguiente lógica:
*? 'use strict'
*! var mongoose = require("mongoose");
*?var app = require('./app'); //servidor creado e importado de Backend/app.js 
*?var port = 3900; //Puerto que yo quiero utilizar
Conectar la Base de Datos al servidor y que escuche (LISTEN) y procese PETICIONES y RESPUESTAS http: 
*?mongoose.connect("mongodb://localhost/api_rest_blog", () => {
*?    app.listen(port, () => {
*?        console.log('Servidor APP corriendo en http://localhost:'+ port);
*?    });
*?});

*!  <<<IMPORTANTE: api_rest_blog Es el "nombre de mi base de datos" que generé en mi base de datos previamente con MongoDB. Este nombre debe coincidir!!!>>>
*!  <<<IMPORTANTE: api_rest_blog Es el "nombre de mi base de datos" que generé en mi base de datos previamente con MongoDB. Este nombre debe coincidir!!!>>>
*!  <<<IMPORTANTE: api_rest_blog Es el "nombre de mi base de datos" que generé en mi base de datos previamente con MongoDB. Este nombre debe coincidir!!!>>>

======================================================

 *!          3.  Crear el servidor con Express y bodyParser:
 
Para crear el servidor, generar el fichero app.js dentro de la carpeta Backend:
*?    Backend/app.js
*todo    Dentro desarrollar la siguiente lógica:
*?'use strict'
//1RO.Cargar módulos(dependencias).
*! var express = require('express'); // Express permite crear el servidor.
*! var bodyParser = require('body-parser'); //Convierte a json para que js lo entienda como objeto nativo

//2DO.Ejecutar EXPRESS (para poder trabajar con HTTP).
*?var app = express(); // express va a ser nuestra aplicación

//*3RO.Cargar Middlewares (que se ejecuta antes de cargar una ruta o URL)
*?app.use(bodyParser.urlencoded({extended:false})); //Configura el bodyParser
*?app.use(bodyParser.json()); //Convierte cualquier petición a json

//4TO.Cargar fichero ROUTES, asi podre usar las rutas que llaman una acción del controlador e interactua con la db  mediante la URL. 
*?var article_routes = require('./routes/article')

//5TO. Añadir prefijos /api a rutas y usar todas las rutas de ROUTES/ARTICLE.JS
*?app.use('/api', article_routes);
//http://localhost:3900/api/datos-curso asi lo interpreta

//*6TO. CORS: es un middleware que permite llamadas o peticiones http (get, post, put, delete) DESDE EL FRONTEND, es el acceso cruzado entre dominio a través de cabeceras.
*?app.use((req, res, next) => { 
*?    res.header('Access-Control-Allow-Origin', '*'); //  El '*' significa cualquier cliente
*?    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
*?    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
*?    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
*?    next(); //Permite pasar del middleware
*?});

//7MO.Exportar módulo para utilizar fuera de este fichero 
*? module.exports = app; //permite usar el objeto "fuera de este fichero" hacia el index.js

*todo   OPCIONAL: Ya teniendo el servidor conectado con mongoose, PUEDO PONERLO A PRUEBA EVITANDO LOS PASO 4TO, 5TO Y 6TO.
** Ejemplo 1
*?  app.get('/probando', (req, res) => { 
*         console.log("Hola mundo"); 
*?  )};
** Ahora si en el navegador pongo http://localhost:3900/probando haciendo petición por GET, el cmd de node muestra "Hola mundo".
 * GET metodo http a utilizar cuando quiero sacar algo del backend, es VISIBLE en la url dEL NAVEGADOR
 * POST método http a utilizar cuando quiero enviar algo al backend, OCULTA LA INFO en la url del navegador
 * REQ - request, es lo que recibo (solicitud) 
 * RES - response, es lo que envio (respuesta) 
 
** Ejemplo 2:  Aca puedo devolver al http://localhost:3900/probando lo que quiera por ejemplo un html
 *?  app.get('/probando', (req, res) => { 
        return res.status(200).send( //Así envio con RES
        `
            <ul>
                <li>NodeJs</li>
                <li>Angular</li>
                <li>React</li>
                <li>VueJs</li>
            </ul>
        `
       )
*?  )};

** Ejemplo 3: También puedo devolver un json. (200) es el código de estado http de éxito (OK), como el 404 (ERROR)
 *?  app.get('/probando', (req, res) => { 
        return res.status(200).send( //Así envio con RES
            {
            curso:'Master en Frameworks Js',
            autor:'German Romano Alvarez',
            url:'https://github.com/gromanoalvarez'
            }
        );
*?  });

  ======================================================

  *!      4.  Probar Servidor desde POSTMAN (un Cliente REST simula ser mi navegador)
  Permite manipular todas las peticiones que haga desde la API REST.
  Dentro de Postman puedo seleccionar cualquier método http, entre ellos los mas conocidos son: GET, POST, PUT o DELETE.

**  Ejemplo a:
  Dentro de Postman "Selecciono el método" y "Coloco la url" o ruta que forme en el apartado anterior.
  *?    GET http://localhost:3900/probando 
  Si ahora doy a "Send" entonces dentro de la pestaña Body de mi Postman mostrará el json que mi servidor envia en tal método get:
            {
            curso:'Master en Frameworks Js',
            autor:'German Romano Alvarez',
            url:'https://github.com/gromanoalvarez'
            }

** Ejemplo b:
También puedo usar el método http Post en mi servidor:
 *?  app.post('/saludo', (req, res) => { 
        var hola = req.body.hola; 
        // para recoger por el Body lo que en el postman quiera pasarle

        return res.status(200).send( 
            {
            hola
            }
        );
*?  });
Ahora si en Postman uso:
  *?    POST http://localhost:3900/saludo
*? Además completo la "key" del Body con la variable 'hola', y en su "value" relleno con un mensaje: 'Que tal, mucho gusto!'.
Por último doy click a "Send".
Entonces en mi ventana de postman que simula ser el navegador aparecerá "{Que tal, mucho gusto!}" (la variable hola). 

  ======================================================
  ======================================================
  ======================================================
  ======================================================

  *!      ARQUITECTURA usada: MODELO-vista-CONTROLADOR (MVC)
 *      1. MODELO: la capa de abstracción sobre la que se hace la conexión a la base de datos. 
 *? (creado en Backend/models/article.js)
 *      2. VISTAS: los json que nos devuelve cada método de la api.
 *      3. CONTROLADORES: Mediante las rutas recibir y devolver datos al cliente.
 *? (creado en Backend/controllers/article.js)
 * 
  ======================================================

  *!            5.  MODELO = molde para cada artículo a guardar en la db
 *? (creado en Backend/models/article.js)
** Molde para indicar a la base de datos  que cada artículo creado tenga un mismo molde o esquema.
*?'use strict'
*! var mongoose = require('mongoose') //Carga el módulo mongoose
*?var Schema = mongoose.Schema //Utilizar el objeto Schema de este tipo

*?  var ArticleSchema = Schema( 
*?      {
*?          title: String, 
*?          content: String, 
*?          date: {type: Date, default: Date.now}, 
*?          image: String 
*?      }
*?  )
//EXPORTARLO COMO MODULO para poder IMPORTARLO EN EL BACKEND
*?  module.exports = mongoose.model('Article', ArticleSchema)
//mongoose creara la colleccion articles guardando los documentos de este tipo y con esta estructura.

======================================================

*!          6.  Rutas
*?  (Backend/routes/article.js)
** Estas son las rutas que van a interactuar a través de métodos http (get, post, put, delete) y que harán una acción desarrollada  en Backend/controllers/article.js.
Metodos http:
// POST para GUARDAR EN BACKEND o BD
// GET para SACAR info de la API
// PUT para ACTUALIZAR
// DELETE para BORRAR

*todo         Estructura de una ruta:
**    routerDeExpress.metodoHttp('/nombreDeseadoDeRuta/:parametroObligatorio', Controlador.AccionDelControlador');
**   routerDeExpress.metodoHttp('/nombreDeseadoDeRuta/:parametroOpcional?', Controlador.AccionDelControlador');

*todo         Lógica desarrollada de las rutas:
*? 'use strict'
*! var express = require('express');
*! var router = express.Router();
*? var ArticleController = require('../controllers/article');
//multiparty actua como middleware que interviene cuando quiero guardar una imagen
*! var multipart = require('connect-multiparty');
//que guarde los archivos/imagenes en el directorio upload/articles
*! var md_upload = multipart({ uploadDir: './upload/articles'}); 

// Ruta de prueba
*? router.post('/datos-curso', ArticleController.datosCurso);
// Rutas útiles de la API RESTful 
*? router.post('/save', ArticleController.save);
*? router.get('/articles/:last?', ArticleController.getArticles);
*? router.get('/article/:id', ArticleController.getArticle);
*? router.put('/article/:id', ArticleController.update); 
*? router.delete('/article/:id', ArticleController.delete);
*! router.post('/upload-image/:id?', md_upload, ArticleController.upload); 
//utilizo middleware multipart para form-data que se ejecuta antes que el router.post() asi guarda las imagenes en un directorio específico.
*? router.get('/get-image/:image', ArticleController.getImage);
// pido el name de la imagen por url
*? router.get('/search/:search', ArticleController.search); 

*? module.exports = router;

  ======================================================

  *!             7. CONTROLADOR = Acciones de las rutas URL
 *? (creado en Backend/controllers/article.js)
 ** Son las acciones o métodos que se ejecutarán cuando use las rutas de mi backend.
 *? 'use strict'
 *! var validator = require('validator');
 *! var fs = require('fs'); 
 *todo   fs es la Libreria file system, permite eliminar imagenes/archivos o files del directorio de mi disco duro donde lo asignaba el multiparty.  YA LO INCLUYE NODEJS
 *? var path = require('path'); // modulo para sacar el path o ruta de un archivo del servidor
 *? var Article = require('../models/article'); //importar el modelo que cree previamente que media con la base de datos

//creo el OBJETO LITERAL JSON controller que contenga todas las acciones (propiedades que guardan un método)
 *? var controller = { 
*todo   acción mostrar datos del curso
*?    datosCurso: (req, res) => {
        return res.status(200).send( 
            { 
            curso:'Master en Frameworks Js',
            autor:'German Romano Alvarez',
            url:'https://github.com/gromanoalvarez'
            }
        )
      },
*todo   acción guardar artículo en la db CON EL MÉTODO SAVE() QUE TRAE MI MODELO CREADO CON MONGOOSE
*?    save: (req, res) => { 
            //Recoger parametros por post (pedir lo que envio en postman por el body- casillas "title y content")
        var params = req.body; 
            //Validar datos con libreria VALIDATOR (instalada previamente) usar TRY y CATCH por si se produzca un error o excepcion en la validacion
        try{
*!            var validate_title = !validator.isEmpty(params.title) //// boolean = TRUE, CUANDO NO ESTE VACIO parametro title
*!            var validate_content = !validator.isEmpty(params.content)
        }catch(err){
            return res.status(200).send({ //RESPONDE CON
                status: 'error',
                message: 'Faltan datos por enviar'
            })
        }
        if(validate_title && validate_content){
            //Crear el objeto a guardar
            var article = new Article() //utilizamos el Objeto de Clase Modelo
            //Asignar valores
            article.title = params.title
            article.content = params.content

            if(params.image){
                article.image = params.image;
            }else{
                article.image = null;
            }

*           //// AQUI PUEDO ENVIAR LOS DATOS POR POSTMAN Y LUEGO VISUALIZAR EL RESULTADO DE ARTICULO SI SE GUARDO EXITOSAMENTE EN ROBO3T
*!            article.save((err, articleStored) => {
  //// err y articleStored son los parametros que puede devolver el metodo save, con estos haremos lo siguiente:
                if(err || !articleStored){
                    return res.status(404).send({ //RESPONDE CON
                        status: 'error',
                        message: 'El artículo no se ha guardado!!!'
                    })
                }
                                //Devolver una respuesta
                return res.status(200).send({ //RESPONDE CON
                    status: 'success',
                    article : articleStored
                })
            })

        }else{
            return res.status(200).send({ //RESPONDE CON
                status: 'error',
                message: 'Los datos no son válidos!!!'
            })
        }
    },
*todo   accion obtener opcionalmente todos los articulo o solo los últimos 5 articulos CON EL METODO FIND() y SORT() QUE TRAE MI MODELO CREADO CON MONGOOSE
*?    getArticles: (req, res) => {
*!      var query = Article.find({});
        var last = req.params.last;
        //last es un parámetro opcional que puedo ingresar por la url
**  "MUESTRA SOLO ULTIMOS 5 ARTICULOS"
        if(last || last != undefined){
            query.limit(5);
        }
** "MUESTRA TODOS" LOS ARTICLES de la base de datos y SORT -_id lo ORDENA desde el mas nuevo al mas viejo.
*!        query.sort('-_id').exec((err, articles) => {
  //// err y articles son los parametros que puede devolver el metodo find, con estos haremos lo siguiente:
            if(err){
                return res.status(500).send({ //RESPONDE CON
                    status: 'error',
                    message: 'Error al devolver los articulos!!!'
                })
            }
            if(!articles){
                return res.status(404).send({ //RESPONDE CON
                    status: 'error',
                    message: 'No hay articulos para mostrar!!!'
                })
            }
            return res.status(200).send({ //RESPONDE CON
                status: 'success',
                articles
            })
        })
    },
*todo   Accion mostrar un solo artículo con método findById() QUE TRAE MI MODELO CREADO CON MONGOOSE
*?    getArticle: (req, res) => { 
        //Recoger el id de la url que ingreso en el cliente rest postman
        var articleId = req.params.id

        //Comprobar que haya entrado algun valor
        if( !articleId || articleId == null){
            return res.status(404).send({ //RESPONDE CON
                status: 'error',
                message: 'No se ha pasado un artículo por params'
            })
        }

        //Buscar el artículo dentro de mi base de datos por su Id
*!        Article.findById(articleId, (err, article) => {
  //// err y article son los parametros que puede devolver el metodo findById, con estos haremos lo siguiente:
            if(err || !articleId){
                return res.status(404).send({ //RESPONDE CON
                    status: 'error',
                    message: 'No existe un artículo con este id en la base de datos'
                })
            }
            //Si todo esta bien, Devolver en json el article.
            return res.status(200).send({ //RESPONDE CON
                status: 'success',
                article
            })
        })
    },
*todo   Accion actualizar artículo CON METODO findByIdAndUpdate() QUE TRAE MI MODELO CREADO CON MONGOOSE
// ACEPTA LOS DATOS ENTRANTES Y MODIFICA EL ARTÍCULO CON MISMO ID PARA ACTUALIZARLO
*?    update: (req, res) => { 
        //Recoger el id del articulo por la url(params)
        var articleId = req.params.id
        //recoger los datos que llegan por el método http put del body
        var params = req.body
        //Validar los datos con try y catch para evitar posibles errores
        try{
*!            var validate_title = !validator.isEmpty(params.title)
*!            var validate_content = !validator.isEmpty(params.content)
        }catch(err){
            return res.status(200).send({ //RESPONDE CON
                status: 'error',
                message: 'Faltan datos por enviar!!!'
            })
        }

        if(validate_title && validate_content){
*!            Article.findByIdAndUpdate({_id: articleId}, params, {new: true}, (err, articleUpdated) => {
  //// le paso un id, los parametros, el true es para que me devuelva el objeto actualizado, err y articleUpdated son los parametros que puede devolver el metodo findByIdAndUpdate, con estos haremos lo siguiente:
                if(err){
                    return res.status(500).send({ //RESPONDE CON
                        status: 'error',
                        message: 'Error al actualizar'
                    }) 
                }
                if(!articleUpdated){
                    return res.status(404).send({ //RESPONDE CON
                        status: 'error',
                        message: 'No existe el artículo'
                    }) 
                }
                return res.status(200).send({ //RESPONDE CON
                    status: 'success',
                    article: articleUpdated
                }) 
            })
        }else{
            return res.status(200).send({ //RESPONDE CON
                status: 'error',
                message: 'La validación no es correcta'
            })
        }
    },
*todo   Acción borrar artículo con MÉTODO findByIdAndDelete() QUE TRAE MI MODELO CREADO CON MONGOOSE
*?    delete: (req, res) => {
          var articleId = req.params.id;
*!        Article.findByIdAndDelete({_id: articleId}, (err, articleRemoved) => {
  //// Le paso un id y luego err y articleRemoved son los parametros que puede devolver el metodo findByIdAndDelete, con estos haremos lo siguiente:
            if(err){
                return res.status(500).send({ //RESPONDE CON
                    status: 'error',
                    message: 'Error al Borrar'
                }) 
            }
            if(!articleRemoved){
                return res.status(404).send({ //RESPONDE CON
                    status: 'error',
                    message: 'No se ha borrado el artículo, posiblemente no exista'
                }) 
            }
            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            })
        })
    },
*todo   Acción guardar imagen/archivo en un artículo y en un directorio que me llega por Body/form-data/file0 (file0 es la "Key" y el "Value" es el nombre de la imagen) CON MÉTODO findOneAndUpdate() QUE TRAE MI MODELO CREADO CON MONGOOSE
*?    upload: (req, res) => {//CARGA IMAGENES DEL FORM-DATA
*!      // Configurar el módulo connect multiparty en router/article.js (hecho)

        // Recoger el fichero de la petición
        var file_name = 'Imagen no subida...';
        if(!req.files){
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }

        // Conseguir nombre y la extensión del archivo
        var file_path = req.files.file0.path;
*todo        // Separar el path en segmentos
*?        var file_split = file_path.split('\\');
        ////  ADVERTENCIA  EN LINUX O MAC
        //// var file_split = file_path.split('/');
        // segmento nombre del archivo
        var file_name = file_split[2];

*todo        // segmento Extensión del fichero
*?        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        // Comprobar la extensión, solo imágenes, si es válida borrar el fichero
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif'){
*todo            // borrar el archivo subido CON FILE SYSTEM
*!            fs.unlink(file_path, (err) => { //BORRA del disco duro ese archivo
                return res.status(404).send({
                    status: 'error',
                    message: 'La extensión de la imagen no es válida, sera borrada !!!'
                });
            });
        }else{
             // Si todo es válido:
             var articleId = req.params.id;
             if(articleId){
*!                Article.findOneAndUpdate({_id: articleId}, {image: file_name}, {new:true}, (err, articleUpdated) => {
  //// Le paso un id y el nombre de la imagen que quiero actualizar, el true es para que me devuelva el objeto actualizado, luego err y articleUpdated son los parametros que puede devolver el metodo findByIdAndUpdate, con estos haremos lo siguiente:
                    if(err || !articleUpdated){
                        return res.status(404).send({
                            status: 'error',
                            message: 'Error al ACTUALIZAR la imagen de articulo !!!'
                        });
                    }
                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                });
             }else{
                return res.status(200).send({
                    status: 'success',
                    message: 'articleId false',
                    image: file_name
                });
             }
        }   
    }, // end upload file
*todo   Acción obtener imagen de un artículo del backend
*?    getImage: (req, res) => { 
        var file = req.params.image; //obtengo el nombre imagen que busco por url
        var path_file = './upload/articles/'+file; //completo el directorio de la imagen donde esta guardada la imagen como le indique al multiparty
*!        fs.exists(path_file, (exists) => {
            if(exists){
*?                return res.sendFile(path.resolve(path_file));
                //devuelve el archivo en crudo
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: 'La imagen no existe !!!'
                });
            }
        });
    },
*todo   Acción buscar artículo CON METODO FIND( "$or") QUE TRAE MI MODELO CREADO CON MONGOOSE
*?    search: (req, res) => { 
        // Sacar el string a buscar que puse en la url
        var searchString = req.params.search;
        ////este .search tiene que coincidir con el nombre del parámetro obligatorio de la ruta ingresada en Backend/route/article

        // Find or, para hacer varias condiciones
*!        Article.find({ "$or": [
            { "title": { "$regex": searchString, "$options": "i"}}, //si el searchString esta "i"ncluido dentro del título
            { "content": { "$regex": searchString, "$options": "i"}} //o esta "i"ncluido dentro del contenido va a devolver los artículos
        ]})
*!        .sort([['date', 'descending']]) //ordena descendiente por fecha
*!        .exec((err, articles) => { //para sacar de la base de datos
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la petición !!!'
                });
            }
            if(!articles || articles.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: `No hay artículos que coincidan con la búsqueda de: ${searchString}  !!!`
                });
            }
            return res.status(200).send({
                status: 'success',
                articles
            });
        });
    }
} //end controller

*? module.exports = controller; 

  
*/
