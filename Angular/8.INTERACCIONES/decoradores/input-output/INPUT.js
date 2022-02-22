
//todo               Pasar dato desde componenten PADRE a HIJO

/**
 * todo         EJEMPLO 0
 *! Paso desde la vista APP.COMPONENT.HTML (PADRE porque es el que contiene o llama a la etiqueta del <app-slider>) al SLIDER.COMPONENT.TS y finalmente lo expreo en la vista del SLIDER.COMPONENT.HTML
 
 *! 1ro: app.component.html (PADRE porque llama al app-slider y le pasa el valor de la propiedad nombre)
 <app-header></app-header>
 <app-slider
*?    [nombre]="'Hola desde el componente padre'" 
 ></<app-slider>

*todo   Importante a tener en cuenta:
** "para pasarle el nombre de la propiedad"
** 'para pasarle un string'

 *! 2do: slider.component.ts (HIJO es la etiqueta llamada que recibe el valor de nombre)
*?  import { Component, OnInit, Input } from '@angular/core';
    export class SliderComponent {
*?      @Input() nombre: string;
    }

*!  3ro: slider.component.html (VISTA DEL HIJO donde puedo utilizar la propiedad recibida):
<div>
*?    <h1>{{nombre}}</h1>
</h1>



 * todo         EJEMPLO I
 ** Utilizando la directiva [ngClass] en COMPONENTE HIJO  y el @Input() size para recibir e identificar que estilo poner al slider de cada COMPONENTE HIJO con la directiva [size] que declare en el padre.
 
*!  blog.component.html (PADRE - envio un 'string'):
*?  <app-slider [size]="'small'"></app-slider>

*!  slider.component.ts (HIJO - recibo):
*?  import{Input} from'',
*?  @Input() size:string;

*!  slider.component.html (HIJO - uso):
<div id="slider" [ngClass]="{
*?    'slider-big': !size || size == 'big',
*?    'slider-small': size == 'small'
}">

*todo   Recordatorio: 'slider-big' y 'slider-small' son clases css que estan declaradas en style.css, entonces según el string pasado con input va a aplicar la clase correspondiente

*todo   IMPORTANTE: Supongamos que en home.component.html también contengo una etiqueta <app-slider> entonces home tambien seria padre de slider. Esto permite que en home yo pueda tener un [size]="'big'" y que en cada padre o pestaña de mi web se muestre un hijo slider diferente (para este caso puedo mostrar un slider pequeño o grande en cada pestaña de mi web).

*TODO        EJEMPLO II
**De un componente padre articles.component.ts a traves de @Input() paso al hijo (que lo recibe con una directiva [articles]) el array de artículos para que se muestren en la vista del componente hijo.
*!COMPONENTE PADRE : blog.component.html (envio una propiedad llamada articles)
*?<app-articles [articles]="articles"></app-articles>
*!COMPONENTE HIJO : articles.component.ts (recibo y lo guardo en un array)
*?import {Input} from '@angular/core';
*?@Input() articles: article[];


 * 
 */
