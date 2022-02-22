/**
 * ! MODELOS =  CLASE!!! MOLDE de Objetos

 * Ej SIRVE PARA OPTIMIZAR LO SIGUIENTE...
 * ! INICIALMENTE: En PELICULAS.COMPONENT.TS
       export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

        public titulo: string;
        public peliculas: Pelicula[]; //array de objetos con propiedad titulo e imagen
        public favorita!:  Pelicula;
        public fecha: any;

        constructor( private _peliculaService: PeliculaService) {
            this.titulo = "Inicio el valor en mi constructor";
            this.peliculas =  
    *!   Esta  PRIMER OPCION  declarando [array de objetos literales en formato json] en el constructor NO SIRVE:
                        [
                            {year: 2019, title:"Spiderman", image: "URL"},
                            {year: 2014, title:"Que paso ayer", image: "URL"},
                            {year: 2017, title:"Advenger", image: "URL"}
                        ]

                        
*! SEGUNDA OPCION.  MAS OPTIMA!!!!
*TODO        CREAR un MODELO = Molde para CREAR Objetos
*!             (CREAR  MODELS/PELICULA.TS) 
*? export class Pelicula{ ////para poder utilizarlo fuera utilizo EXPORT
**      public title: string;
**      public year: number;
**      public image: string;

**        constructor(title, year, image){
**           this.title = title;
**           this.year = year;
**           this.image = image;
**        }
*! AHORA PUEDO IMPORTARLO EN 
*!          PELICULAS.COMPONENT.TS (EL EJEMPLO INICIAL)
*? import {Pelicula} from '../../models/pelicula';
**        constructor( private _peliculaService: PeliculaService) {
**            this.titulo = "Inicio el valor en mi constructor";
*TODO    UTILIZO la Clase-MOLDE, creando o mejor dicho "INSTANCIANDO" "new" Objetos y le paso los mismos atributos  que requiere el constructor declarado en MODELS/pelicula.ts
**            this.peliculas =  [
*?                                  new Pelicula("Spiderman", 2019,  "URL"),
*?                                  new Pelicula("Que paso ayer", 2014, "URL"),
*?                                  new Pelicula("Advenger", 2017, "URL")
**                              ];
**          }



*!  OPCIONAL puedo optimizar más aún el código  (en  MODELS/PELICULA.TS)
* export class Pelicula{
////     public title: string;
////     public year: number;
////     public image: string;

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
 *! MAGICO! TYPESCRIPT NOS PERMITE HACER TODO RESUMIDO EN UNAS POCAS LINEAS (DECLARO, RECIBO EL DATO Y ASIGNO AL MISMO TIEMPO).

 */
