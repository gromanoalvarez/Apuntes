/**
 *  
Para trabajar con formularios dentro de Angular
hay que vincular el "form" a un "Objeto"(user) que sera un "Modelo" y utilizar [(ngModel)]  para pasarle los datos rellenados

1RO CREAR OBJETO (USER) en el formulario.component.ts:

    export class FormularioComponent implements OnInit{
*!      public user: any;

        constructor(){
*todo           this.user={
                nombre: '',
                apellidos:'',
                bio:'',
                genero:''
            }
        }
    }

2DO import { FormsModule } from '@angular/forms' en app.module.ts
3ERO import: [FormsModule] en app.module.ts

4TO vincular etiqueta FORM con EVENTO Y FUNCION en formulario.component.html
    (ngSubmit)='onSubmit()' 

5TO definir la funcion onSubmit (){} en formulario.component.ts
    onSubmit(){}
6TO NOMBRAR al FORM con  
    #userForm="ngForm"
*todo (El # permite crear una variable a la cual le asigno el valor de un form de angular)
7MO NOMBRAR los INPUTS con 
    #nameDelInput="ngModel"
8VO INDICAR que PROPIEDAD DEL OBJETO (USER) MODIFICARA en el archivo formulario.component.ts  usando 
    [(ngModel)]="user.nombre" 
9NO OPCIONAL en la vista (html) mostrar el relleno del form en la parte de la vista que quiera.
    {{user.nombre}} 


*!                  VALIDACION del FORM

1 Puedo usar REQUIRED en los INPUTS
2 Añadir MENSAJES DE ERROR:
    <small *ngIf="!nombre.valid && nombre.touched">
        El nombre no es válido
    </small>
3 También puedo agregar una expresion regular(regEx) o pattern:
    <input type="text" name="nombre" #nombre="ngModel" [(ngModel)]="user.nombre" required pattern="[a-zA-Z]+" />

*todo 4     QUE SOLO SE ENVIE EL FORM CUANDO SEA VALIDO
** UTILIZO [disabled]="userForm.invalid" en el 
*?      <INPUT type="SUBMIT" value="Enviar"  [disabled]="userForm.invalid" />
 * 
 */

