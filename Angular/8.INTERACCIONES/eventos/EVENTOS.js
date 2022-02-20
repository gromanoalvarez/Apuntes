/**
 *TODO                     Evento click - (click)="hacerClick()"
 * 
    En el .html uso en la etiqueta button
        <button  (click)="hacerClick()" > CLICKEA AQUI </button>
    En el .ts declaro el metodo 
        hacerClick(){
            alert('Diste click');
        }

 *TODO                     Evento blur - (blur)="hasSalido()"
 *
 * * Captura "cuando salgo del campo"
 *  usar [(ngModel)]="" para modificar una propiedad (campo) en la vista y en el modelo o clase (.ts)
 *      <input type="text" [(ngModel)]="campo" (blur)="hasSalido()"/>
 *      {{campo}}
 * EN EL .TS 
 *  hasSaldido(){alert('Saliste del campo');}
 *
 * 
 *TODO                     Evento keyUp - (keyup.enter)="hasDadoAEnter()"
 Cuando pulso una letra y la levanto
        hasDadoAEnter(){
            alert('Apretaste Enter');
        }
 * 
 */