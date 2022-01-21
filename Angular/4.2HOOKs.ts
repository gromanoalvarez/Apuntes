 
// ! Los Hooks son EVENTOS o métodos del ciclo de vida de un componente.

// 1ro. se deben "import" {} from '@angular/core'
// 2do. se "implements" en la clase a export del componente. 

// ejemplos:

// TODO  ngOnInit(){}; Se ejecuta "automaticamente" LUEGO DEL CONSTRUCTOR del
//                  componente.ts, este método da funcionalidad.

// TODO  ngDoCheck(){}; Se ejecuta solo cuando hay algun CAMBIOS en el 
//                 componente.ts Ej al apretar un button se activa el evento (click)="cambiarTitulo()"

// TODO ngOnDestroy(){}; Avisa que se va a ELIMINAR  del DOM el componente (aplica tambien para ocultar componente). 