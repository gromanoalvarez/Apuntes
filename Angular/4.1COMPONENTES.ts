//!                         COMPONENTES

//TODO          "TODO" LO QUE VAMOS A UTILIZAR DENTRO DE LA APLICACION ES UN COMPONENTE, ES UN TROZO DE PANTALLA.

// ! PRIMERO SE GENERA EL COMPONENTE.ts NUEVO
// ! SEGUNDO SE LO CARGA EN MODULE.ts - para utilizar el componente x medio de su etiqueta selectora en las vistas
// ! TERCERO SE ESTABLECE EL ROUTING.ts - RUTA si es necesaria

// ====================================================================================================

//! 			 COMPONENTES POR DEFAULT (vienen dentro de la carpeta app/)

// TODO 1)	app.component.ts -> COMPONENTE PRINCIPAL que viene por defecto 
// *		Posee la etiqueta <app-root></app-root> que SE EJECUTA EN "INDEX.HTML".

// TODO 2)	app.module.ts -> MODULO PRINCIPAL 
// *			Donde se hace el "IMPORT  de todos los COMPONENTES", de otros módulos y servicios.
//*              Permite cargar configuraciones y utilizarlos en CUALQUIER PARTE DE MI APLICACIÓN.
//*              (Es una BUENA PRACTICA con el nombre de mis componentes usar sufijos "component").
// 	?			@NgModule({
// 	?			declarations: [
// 	?				PeliculasComponent,    HeaderComponent,
// 	?			],
// 	?			imports: [ ],
// 	?			providers: [appRoutingProviders], // SERVICIOS
// 	?			bootstrap: [AppComponent], // COMPONENTE PRINCIPAL QUE VA A ENTRAR A ESTE MÓDULO
// 	?			})
// 	?			export class AppModule {}

//TODO 3)   app.routing.ts ->  Contiene los path (rutas o direcciones de la URL)
// ?        const appRoutes: Routes = [{path: '', component: HomeComponent}];
// !         + EXPORT

//! <<<< El <router-outlet></router-outlet> de la vista del componente principal reconoce en que url estoy y a que ruta quiero ir y va modificando la vista sin refrescar la SINGLE PAGE APPLICATION. >>>>

//! <<<< El <router-outlet></router-outlet> de la vista del componente principal reconoce en que url estoy y a que ruta quiero ir y va modificando la vista sin refrescar la SINGLE PAGE APPLICATION. >>>>

//! <<<< El <router-outlet></router-outlet> de la vista del componente principal reconoce en que url estoy y a que ruta quiero ir y va modificando la vista sin refrescar la SINGLE PAGE APPLICATION. >>>>

// ========================================================================================================

//  !           CREAR COMPONENTES (manualmente)

// 			Ir a la carpeta AprendiendoAngular/src/app
/**     Ejemplo: MI-COMPONENTE.TS 

*? import { Component } from '@angular/core'; (IMPORTO EL DECORADOR)

*? @Component({ //// Para indicar las PROPIEDADES o características de este componente.
*?     selector: 'mi-componente', //// Nombre de la etiqueta.
*?     templateUrl: //// Puedo usar templeteStrings `etiquetas html` o hacer la vista separada y enlazarla: './mi-componente.component.html' 
*?})

*? export class MiComponente{ //// Esta es la clase. 

*? ////Primero las propiedades:
    public titulo: string; 
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

*? ////Segundo el constructor:
    constructor(){
        this.titulo = 'Hola mundo, este es MI COMPONENTE'
        this.comentario = '{{Usando Binding por Interpolación}}'
        this.year = 2021;
        this.mostrarPeliculas = true;
    }
  
*? ////Tercero los hooks y/o métodos:
    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}

** PARA SU USO:
// ! SEGUNDO SE LO CARGA EN MODULE.ts - para utilizar el componente x medio de su etiqueta selectora en las vistas
// ! TERCERO SE ESTABLECE EL ROUTING.ts - RUTA si es necesaria


// ========================================================================================================


//  !           CREAR COMPONENTES (con ANGULAR CLI)

// * Con un simple comando podemos generar un componente haciendolo más rápido de manera automática. 

// TODO			CREAR UN MULTICOMPONENTE CON "ANGULAR CLI" por medio del CMD 

//* 	1- Abro el CMD y me ubico dentro del directorio donde estaba el ng serve o Angular (SI YA ESTABA LANZADO NG SERVE TENGO QUE CERRAR EL MISMO CON CTROL+C )

//*     2- Ingreso el comando:
// !	<<<	ng g component component/nombreQueQuieroParaMiComponente >>>

// 			Esto CREA en mi directorio los 4 archivos 
// TODO		4 ARCHIVOS: 1.ts + 1.html + 1.css + 1spect.ts
// 			(ya lo crea con selector y templateUrl) 
// TODO     component.css y angular cli UPDATE(Actualizador) ACTUALIZAN AUTOMATICAMENTE MI app.module!!! 
// 			Es decir: "ya me ha cargado el componente dentro de la aplicación de Angular para yo utilizarlo donde quiera".

//*     3- Para poder utilizarlos tenemos que VOLVER A LANZAR EL  
//! 	<<<	ng serve  >>>

// 			Asi puedo empezar el servidor local de Angular y el WEBPACK para que nos recompile todo.
// 			(esto si es exitoso nos devuelve un "Compiled successfully")

// 			Para "mostrar los componentes que hemos creado en LA VISTA, los llamo por su nombre puesto en el 'SELECTOR'
//             Ejemplo   selector: 'app-footer',



//*  <<<Puedo explorar más comandos de angular cli en https wwww.angular.io / documentation / cli commands>>>



//! Además Puedo crear componentes padres y componentes hijos

// * COMPONENTES PADRES: Se comportan como paginas mismas, es decir son secciones con su propia URL por eso  tienen sus propias rutas hechas 

//  * COMPONENTES HIJOS: Son pequeños componentes dentro de otros.

// ========================================================================================================

*/