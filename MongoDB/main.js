/* 
    
!           MongoDB es No SQL

-No relacional (no necesita relaciones entre datos por claves) Una collection puede tener diferentes datos a la otra sin relacion alguna
-Sencilla (no hace falta hacer relaciones)
-Veloz (por ser json de tipo binario, veloz en tiempo de consultas)
-Utiliza JavaScript 
-Orientada a "COLLECTIONS" de "CAMPOS" y "DOCUMENTOS" (usa json pero aca se transforman en bson: binario)
-Esquema libre (en cada documento no hay porque tener misma cantidad de "campos" o "documentos")
    Por ejemplo:
> db.products.find()
{ "_id" : ObjectId("61bd223ce972678be6a07084"), "name" : "keyboard" }  
{ "_id" : ObjectId("61bd2286e972678be6a07085"), "name" : "laptop", "price" : 999.99 }

======================================================
!           COMPARATIVA CON SQL

TODO    MIENTRAS QUE EN SQL SE HARIA ASÍ
ESQUEMA:
        COLUMNA         COLUMNA
FILA    registro        registro
FILA    registro        registro

TODO     EN MONGODB LA SINTAXIS ES LA SIGUIENTE:
usuarios:
{
    nombre:"German",
    apellido: "Romano",
    email: "gromanoalvarez@alumno.unlam.edu.ar"
},
{
    nombre: "datos",
    apellido: "datos",
    email: "datos"
}

TODO    EN COMPARATIVA :
El ESQUEMA pasa a ser COLLECTIONS (usuarios),
Las FILAS pasan a ser  DOCUMENTOS (todo lo que esta entre {}),
Las COLUMNAS pasan a ser CAMPOS:,
Los REGISTROS ahora son "DATOS".

COLLECTION-usuarios:
              CAMPO-NOMBRE  CAMPO-APELLIDO  CAMPO-EMAIL
{DOCUMENTO1  German           Romano       gromanoalvarez@alumno.unlam.edu.ar },
{DOCUMENTO2  datos             datos       datos }


======================================================

!                      Instalación:
? https://www.mongodb.com/download-center/community  
version: current
package: MSI
OS: windows 64bit 

(En Service Configuration se puede configurar como "servicio" para no tener que correr manualmente el mongod, lo que es recomendable si lo usas a diario)

todo        Una vez instalado necesito crear la carpeta "db" dentro de la carpeta "data":
Equipo/disco (C:) crear la carpeta data/db
*Aqui se guardan las configuraciones de mongodb para windows


======================================================

!                      Ejecutar MongoDB:

? C:\Program Files\MongoDB\Server\5.0\bin
todo        ABRIR Y DEJAR CORRIENDO  "mongod" (servicio activo)
todo        ABRIR "mongo" , se abrira en CMD (poner help si quiero ver los comandos)
* Ejemplo:
Si ingreso el comando: show dbs; mostrará todas las bases de datos creadas
(admin, config y local vienen por defecto). 
Luego puedo abrir una base de datos con el comando: use seguido del nombre de la base de datos que quiero usar.
Luego puedo ver las collections dentro de esa base de datos con el comando: show collections

! IMPORTANTE: TENER CORRIENDO "mongod".  
! IMPORTANTE: TENER CORRIENDO "mongod".  
! IMPORTANTE: TENER CORRIENDO "mongod".  

* 1. Crear una base de datos:
No existe un comando especifico para crear la base de dato, simplemente cuando pongo "use" y el nombre  detecta si existe o no, y si no existe la crea, pero luego estoy obligado a insertarle una collection y un dato, sino si la dejo vacia la eliminará.
    use nombreNuevaDB (en este caso pruebas1)
?    use pruebas1
*<Recordar que si ahora pongo el comando show dbs no la muestra porque no tiene contenido>

* 2. Agregar una collection con  "un solo documento":
    db.collection.metodo({Bson});
    db.nombreCollectionDeseada.save({nombre: "German", apellido:"Romano", email: "gromanoalvarez@alumno.unlam.edu.ar"});
?    db.usuarios.save({nombre: "German", apellido:"Romano", email: "gromanoalvarez@alumno.unlam.edu.ar"});

  todo   Como respuesta podremos ver: WriteResult({"nInserted":1}) ..... SIGNIFICA INSERCIÓN DE 1 COLLECTION EXITOSA
*<Ahora ya al tener una collection se creo definitivamente la db, si ingreso el comando show dbs ahora si nos la muestra>

o sino también puedo usar el otro método:
?    db.nombreCollection.insert({nombre: "German", apellido:"Romano", email: "gromanoalvarez@alumno.unlam.edu.ar"});

*O se pueden agregar "múltiples documentos" en un solo paso:
? db.products.insert([
    {
        "name": "mouse",
        "description": "razer mouse",
        "tags": ["computers", "gaming"],
        "quantity": 14,
        "created_at": new Date()
    },
    {
        "name": "monitor",
        "description": "lg monitor",
        "tags": ["computers", "gaming"],
        "quantity": 3,
        "created_at": new Date() 
    }
])

*O sino simplemente crear una collection "sin documentos":
? db.createCollection("nombreDeCollection")

*3. Puedo VER la base de datos:
?    show dbs

*4. Puedo VER las collecciones dentro de la db:
?    show collections

*5. Puedo BUSCAR TODOS LOS DOCUMENTOS hay dentro de un collections
    baseDeDato.Collections.MetodoBuscar();
?    db.usuarios.find() 
Sino tambien
?    db.usuarios.find().pretty()
 (pretty es lo detalla de forma bonita con enters en FORMATO JSON de js)

*BUSCAR TODOS LOS DOCUMENTOS con un Campo y Dato especifico  
?        db.usuarios.find({"campo": "dato"}).pretty()

*BUSCAR UN LIMITE DE DOCUMENTOS (ej 3)
?        db.usuarios.find().limit(3)

* BUSCAR SOLO 1 DOCUMENTO DONDE SE ENCUENTRA UN CAMPO con un dato especifico
?        db.usuarios.findOne({"campo": "dato"})  - devuelve solo el primer documento

* BUSCAR SOLO 1 DOCUMENTO DONDE SE ENCUENTRA VARIOS CAMPOS con varios datos especificos
?        db.usuarios.findOne({"campo": "dato", "campo2": "dato2"})  

* BUSCAR SOLO 1 DOCUMENTO DONDE SE ENCUENTRA VARIOS CAMPOS con varios datos especificos, PERO DENTRO DEL DOCUMENTO MOSTRAME SOLO 1 DATO DEL CAMPO NAME Y EL CAMPO DESCRIPTION  
?        db.usuarios.findOne({"campo": "dato", "campo2": "dato2"}, {"name":1, "description":1})  

*5.B. TRAER INFO Y ORDENAR por nombre
?        db.usuarios.find({"campo": "dato"}).sort({name: 1})

*5.C  TRAER INFO Y HACER METODOS
?    db.products.find().forEach(product => print("Product Name: " + product.name))

*5.D TRAER UN PRODUCTO Y "REEMPLAZAR" TODO POR SOLO UN NUEVO DATO 
?    db.products.update({"name": "keyboard"}, {"price": 99.99})

*5.E TRAER UN PRODUCTO Y "AGREGAR" UN NUEVO DATO
?    db.products.uddate({"name": "laptop"}, {$set: {"description": "lg gram laptop"} })

*5.F TRAER UN PRODUCTO y si no existe no importa "AGREGAR" UN NUEVO DATO
 ?   db.products.uddate({"name": "laptop"}, {$set: {"description": "lg gram laptop"}}, {upsert: true} )

*5.G Buscar documento e INCREMENTAR valor numerico
?    db.products.update({"name": "keyboard"}, {$inc: {"price": 0.01}})

*5.H Buscar documento y RENOMBRAR de price a precio
?    db.products.update({"name": "keyboard"}, {$rename: {"price": "precio"}})

*6. Para ELIMINAR la base de datos:
Primero posicionarme en la base de datos que quiero borrar e ingresar el comando:
?    db.dropDatabase()

*7. Para ELIMINAR una collections:
?    db.NombreCollection.drop()          

*8 .Buscar y REMOVER 1 SOLO DOCUMENTO SEGÚN UN CAMPO
?    db.products.remove({"name": "keyboard"})

*9. BUSCAR Y REMOVER TODOS LOS DOCUMENTOS
?    db.products.remove({})

! IMPORTANTE: TENER CORRIENDO "mongod".  
! IMPORTANTE: TENER CORRIENDO "mongod".  
! IMPORTANTE: TENER CORRIENDO "mongod".  


============================================================================

!               "Robo 3T" is the MongoDB GUI for hobbyists.

 todo       Robo3t VISUALIZA LAS COLLECTIONS QUE TENGO EN MONGODB EN UNA INTERFAZ MAS BONITA. Es un GUI: ADMINISTRADOR VISUAL para mongoDB (EVITA trabajar con LOS COMANDOS)
    Instalar en:
?        https://robomongo.org/

! IMPORTANTE: TENER CORRIENDO "mongod".  
! IMPORTANTE: TENER CORRIENDO "mongod".  
! IMPORTANTE: TENER CORRIENDO "mongod".  

============================================================================

!       MongoDB en NodeJS

1. Con NodeJS debo usar la dependencia mongoose para "vincular el servidor con la base de datos":
?   Backend/main.js
2. También debo crear el modelo para que cada artículo del blog se guarde en el backend con las mismas propiedades (campos):
?   Backend/models/article.js  
3. Dentro declarar el Schema que seguirán todas las collections  declarando el tipo de dato que usará cada campo: 
?var ArticleSchema = Schema( 
?    {
?        title: String, 
?        content: String, 
?        date: {type: Date, default: Date.now}, 
?        image: String 
?    }
?)

*/