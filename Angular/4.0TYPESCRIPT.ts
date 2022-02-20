

//!            TypeScript:

//* Lenguaje altamente tipado que se utiliza por ejemplo en todos los componentes y archivos .ts

//* Permite decidir propiedades como si es public, private, protected, modificadores de la visibilidad tipos de retornos en las funciones, etc.

//* 1) Hacer los imports

// *2) Utilizar el decorador @Component({})

// *3) Declarar y exportar la clase:
//  ? export class NameComponent implements Hooks{

     //propiedades
//*     tipoDeAcceso nombre: tipoDeDato;
//?    public titulo: string;

     //constructor
// ?    constructor( private _servicio : provider){
// ?        this.titulo = "Hola Mundo";
// ?     }

     //hooks

     //métodos
//  ?   metodos(valorIngresante<tipoDeDatoIngresante>): tipoDeDatoDevuelto{
//  ?       accion;
//  ?   }
//  ? }


//!       Ejemplo para optimizar código:
/**
class Pelicula{
     ////    (declaracion de variables)
     ////     public title: string;
     ////      public year: number;
     ////    public image: string;
     
     ////    constructor...**    (asigno valores a mis propiedades declaradas)
     ////        constructor( title, year, image){
     ////           this.title=title;
     ////           this.year= year;
     ////           this.image= image;
     ////        }
     **        constructor(
     **           public title: string,
     **           public year: number,
     **           public  URL: string
     **        ){} 
      *! MAGICO! TYPESCRIPT NOS PERMITE HACER TODO RESUMIDO EN UNAS POCAS LINEAS (DECLARO Y ASIGNO AL MISMO TIEMPO)
 */