//!  PIPES (tuberias, helper para las vistas)
//? {{ ValorDelDato | nombreDelPipe }} 
// son pequeñas funciones para usar en la vista,
// vienen por defecto (https://angular.io/api/core/Pipe)
// o las puedo crear (ver: espar.pipe.ts)

/** EJEMPLOS
 * 
 * todo          peliculas.component.html
 *       <h4>
         {{ favorita.title | uppercase }}  <!--o lowercase -->
      </h4>
      <h5>
        Del  {{ favorita.year | date  }} <!--sino parametro 'mm/dd/yyyy' -->
      </h5>
      <h5>
       Hoy es {{ this.fecha | date: 'short' }} <!--sino parametro full o fullDate-->
     </h5>
     <h5>
       {{this.fecha | espar}} <!--Pipe creada por mi espar.pipe.ts-->
     </h5>

*todo           espar.pipe.ts: (Determina si el numero es par o no)

//1
import { Pipe, PipeTransform } from '@angular/core';

//2 decorador que indica el nombre del pipe
@Pipe ({
    name: 'espar'
})

//3 creo la clase para exportarla
export class EsParPipe implements PipeTransform{
    //si o si metodo transform e ingreso el valor de la etiqueta de la vista que quiero modificar

    transform(value: any) {
        var espar = 'es impar';
        if(value%2==0){
            espar= "es par"
        }
        return "Este año "+espar; 
    }
}

//4 import la clase EsParPipe en el app.module.ts y utilizarla en  declarations

ya puedo utilizarla como  {{this.fecha | espar}} en peliculas.component.html

 */

/**   libreria:
 *!   www.npmjs.com/package/angular2-moment

*Formatear las fechas a gusto:
1.Instalar
*?  npm install --save angular2-moment
2.App.module
*? import {MomentModule} from 'angular2-moment';
*? imports: [MomentModule]
3.En la vista mediante llaves de interpolacion 
Se indica a traves de "pipes"
    <span class="date">
*?    {{article.date | amLocale: 'es'| amTimeAgo}}
    </span>
 */