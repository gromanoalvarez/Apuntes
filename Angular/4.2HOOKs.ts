 
// ! Los Hooks son EVENTOS o métodos del ciclo de vida de un componente.

// 1ro. se deben "import" {} from '@angular/core' en conjunto con el decorador Component
// 2do. se "implements" en la clase a export del componente. 

// Ejemplos:

// TODO     ngOnInit(){}; Se ejecuta "automaticamente" LUEGO DEL CONSTRUCTOR del componente.ts, este método da funcionalidad.

// TODO      ngDoCheck(){}; Se ejecuta "cuando hay CAMBIOS" en el componente.ts Ejemplo al apretar un button.

// TODO      ngOnDestroy(){}; Avisa que se va a "ELIMINAR del DOM" el componente (aplica tambien para ocultar componente). 