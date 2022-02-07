
//todo                DE PADRE A HIJO

/**
 * todo         EJEMPLO I
 ** Utilizando la directiva [ngClass] en COMPONENTE PADRE  y el @Input() size para recibir e identificar que estilo poner al slider de cada COMPONENTE HIJO con la directiva [size]
 * 
*! COMP. PADRE slider.component.html:
<div id="slider" [ngClass]="{
*?    'slider-big': !size || size == 'big',
*?    'slider-small': size == 'small'
}">
*! COMP. PADRE slider.component.ts:
import{Input} from'',
*?@Input() size:string;

*! COMP. HIJO blog.component.html:
*?<app-slider [size]="'small'"></app-slider>


*TODO        EJEMPLO II
**De un componente padre articles.component.ts a traves de @Input() paso al hijo (que lo recibe con una directiva [articles]) el array de articulos para que se muestren en la vista del componente hijo.
*!COMPONENTE HIJO: blog.component.html
*?<app-articles [articles]="articles"></app-articles>
*!COMPONENTE PADRE: articles.component.ts
*?import {Input} from '@angular/core';
*?@Input() articles: article[];


 * 
 */
