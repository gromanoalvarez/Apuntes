/* 
    
   MongoDB es No SQL
-No relacional (no necesita relaciones entre datos por claves)
-Utiliza JavaScript 
-Orientada a "COLLECTIONS" de "CAMPOS" y "DOCUMENTOS" (usa json pero aca se transforman en bson: binario)
-Sencilla (no hace falta hacer relaciones)
-Veloz (por ser json de tipo binario, veloz en tiempo de consultas)
-Esquema libre (en cada documento no hay porque tener misma cantidad de "campos" o "documentos")
    Por ejemplo:
> db.products.find()
{ "_id" : ObjectId("61bd223ce972678be6a07084"), "name" : "keyboard" }  
{ "_id" : ObjectId("61bd2286e972678be6a07085"), "name" : "laptop", "price" : 999.99 }

COLLECTIONS:
              CAMPO-NOMBRE  CAMPO-APELLIDO  CAMPO-EMAIL
{DOCUMENTO1}  German           Romano       gromanoalvarez@alumno.unlam.edu.ar
{DOCUMENTO2}  datos             datos       datos

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

Ejecutar MONGODB:
C:\Program Files\MongoDB\Server\5.0\bin
ABRIR Y DEJAR CORRIENDO  "mongod"
ABRIR "mongo" (poner help si quiero ver los comandos)

1.Crear una base de datos:
    use "nombre de la nueva base de datos (en este caso pruebas1)"

2. Agregar datos:
    db.collection.metodo({bson});
    db.NombreCollection.save({"nombre": "German", "apellido":"Romano", "email": "gromanoalvarez@alumno.unlam.edu.ar"});
o sino tambien el otro metodo:
    db.NombreCollection.insert({"nombre": "German", "apellido":"Romano", "email": "gromanoalvarez@alumno.unlam.edu.ar"});
o sino db.createCollection("nombreDeCollection")

O se pueden agregar multiples datos en un solo paso:
db.products.insert([
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
    


                    WriteResult({"nInserted":1}) ..... SIGNIFICA INSERCION EXITOSA



3. Puedo VER la base de datos:
    show dbs

4. Puedo VER las collecciones dentro de la db:
    show collections



5. Puedo BUSCAR TODOS LOS DOCUMENTOS hay dentro de un collections
    db.usuarios.find() 
    baseDeDato.Collections.MetodoBuscar();
Sino tambien
    db.usuarios.find().pretty() (lo detalla con enters en FORMATO JSON de js)
Sino tambien BUSCAR TODOS LOS DOCUMENTOS con un Campo y Dato especifico  
        db.usuarios.find({"campo": "dato"}).pretty()

Sino tambien BUSCAR UN LIMITE DE DOCUMENTOS (ej 3)
        db.usuarios.find().limit(3)

Sino tambien BUSCAR SOLO 1 DOCUMENTO DONDE SE ENCUENTRA UN CAMPO con un dato especifico
        db.usuarios.findOne({"campo": "dato"})  - devuelve solo el primer documento
Sino tambien BUSCAR SOLO 1 DOCUMENTO DONDE SE ENCUENTRA VARIOS CAMPOS con varios datos especificos
        db.usuarios.findOne({"campo": "dato", "campo2": "dato2"})  

Sino tambien BUSCAR SOLO 1 DOCUMENTO DONDE SE ENCUENTRA VARIOS CAMPOS con varios datos especificos, PERO DENTRO DEL DOCUMENTO MOSTRAME SOLO 1 DATO DEL CAMPO NAME Y EL CAMPO DESCRIPTION  
        db.usuarios.findOne({"campo": "dato", "campo2": "dato2"}, {"name":1, "description":1})  

5.B. TRAER INFO Y ORDENAR por nombre
        db.usuarios.find({"campo": "dato"}).sort({name: 1})

5.C  TRAER INFO Y HACER METODOS
    db.products.find().forEach(product => print("Product Name: " + product.name))

5.D TRAER UN PRODUCTO Y "REEMPLAZAR" TODO POR SOLO UN NUEVO DATO 
    db.products.update({"name": "keyboard"}, {"price": 99.99})

5.E TRAER UN PRODUCTO Y "AGREGAR" UN NUEVO DATO
    db.products.uddate({"name": "laptop"}, {$set: {"description": "lg gram laptop"} })

5.F TRAER UN PRODUCTO y si no existe no importa "AGREGAR" UN NUEVO DATO
    db.products.uddate({"name": "laptop"}, {$set: {"description": "lg gram laptop"}}, {upsert: true} )

5.G Buscar documento e INCREMENTAR valor numerico
    db.products.update({"name": "keyboard"}, {$inc: {"price": 0.01}})

5.H Buscar documento y RENOMBRAR de price a precio
    db.products.update({"name": "keyboard"}, {$rename: {"price": "precio"}})



6. Para ELIMINAR la base de datos:
Primero posicionarme en la base de datos que quiero borrar e ingresar el comando:
    db.dropDatabase()

7. Para ELIMINAR una collections:
    db.NombreCollection.drop()          

8 .Buscar y REMOVER 1 SOLO DOCUEMNTO SEGUN UN CAMPO
    db.products.remove({"name": "keyboard"})
9. BUSCAR Y REMOVER TODOS LOS DOCUMENTOS
    db.products.remove({})



    GUI: ADMINISTRADOR VISUAL para mongoDB
        https://robomongo.org/
"Robo 3T" is the MongoDB GUI for hobbyists.
MongoDB GUI with embedded shell
Support for MongoDB 4.2

IMPORTANTE: TENER CORRIENDO mongod y mongo para crear Robo3t
   luego Conectar







*/