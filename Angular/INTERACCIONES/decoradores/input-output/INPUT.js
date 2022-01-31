
//todo                DE PADRE A HIJO

/**
 * directiva ngClass EN COMPONENTE PADRE  para recibir e identificar que estilo poner al slider de cada componente hijo
COMP. PADRE slider.component.html:
<div id="slider" [ngClass]="{
    'slider-big': !size || size == 'big',
    'slider-small': size == 'small'
}">
COMP. PADRE slider.component.ts:
@Input() size:string;

COMP. HIJO blog.component.html:
<app-slider [size]="'small'"></app-slider>
 * 
 */
