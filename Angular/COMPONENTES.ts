  /**
   * *       Probando Mejores comentarios extensión
   * 
   * *Informacion importante (mas brillo)
   * ! No usar este método
   * ? QUIZAS este método sea expuesto en la API publica
   * TODO: REFACTORIZACION de método confirmado en la API
   * @propiedades puedo apuntar sobre parámetros y propiedades
   * 
   */


// ! PRIMERO SE GENERA EL COMPONENTE.ts NUEVO
// ! SEGUNDO SE LO CARGA EN MODULE.ts - para utilizar el componente x medio de su etiqueta selectora en las vistas
// ! TERCERO SE ESTABLECE EL ROUTING.ts - RUTA si es necesaria

// ====================================================================================================
//* 			 COMPONENTES POR DEFAULT: (carpeta app/)

//? 1)   app.routing.ts ->  path (rutas)

// ?const appRoutes: Routes = [{path: '', component: HomeComponent}];
// ! + EXPORT


// TODO 2)	app.module.ts -> MODULO PRINCIPAL 
// *					"IMPORT COMPONENTES".
// 				* Permite cargar configuraciones
// 	*			. IMPORTA EL COMPONENTE A CUALQUIER PARTE DE MI APLICACIóN
// 				* es una BUENA PRACTICA con el nombre de mis componentes usar sufijos "component"
// 	?			@NgModule({
// 	?			declarations: [
// 	?				PeliculasComponent,    HeaderComponent,
// 	?			],
// 	?			imports: [ ],
// 	?			providers: [appRoutingProviders], //SERVICIOS
// 	?			bootstrap: [AppComponent], // COMPONENTE PRINCIPAL QUE VA A ENTRAR A ESTE MÓDULO
// 	?			})
// 	?			export class AppModule {}


// TODO 3)	app.component.ts -> COMPONENTE PRINCIPAL que viene por defecto 
// *		tiene la etiqueta <app-root></app-root>

// ========================================================================================================
//  !           CREAR COMPONENTES  (con ANGULAR CLI)

// * Con un simple comando podemos generar un componente haciendolo más rápido de manera automática 

//   TODO          "TODO" LO QUE VAMOS A UTILIZAR DENTRO DE LA APLICACION ES UN COMPONENTE, ES UN TROZO DE PANTALLA.

//TODO 			CREAR UN COMPONENTE MANUALMENTE
// 			Ir a la carpeta AprendiendoAngular/src/app, pero quedaria 
// 			sucio, no seria una buena practica, sino debo hacer una carpeta 
// 			dentro de app que se llame
// 			components y creo carpetas para cada componente 
// 			EJ. mi-componente

// TODO			CREAR UN MULTICOMPONENTE CON "ANGULAR CLI" por medio del CMD 
// 			(donde estaba el ng serve o Angular lanzado abro el cmo)
// 			poner en el directorio donde tengo Angular instalado:

// !	<<<	ng g component component/nombreQueQuieroParaMiComponente >>>

// 			Esto me CREA en mi directorio los archivos component.html component.ts 
// 			(ya lo crea con selector y templateUrl) 
// 			component.css y UPDATE(Actualiza) ACTUALIZA MI app.module!!! 
// 			(Permite cargar configuraciones para el MÓdulo. 
// 			IMPORTA EL COMPONENTE A CUALQUIER PARTE DE MI APLICACIÓN )
// 			Es decir: "ya me ha cargado el componente dentro de la aplicación de Angular.
// 			para yo utilizarlo donde quiera".

// 			Una vez creado los multicomponentes para poder utilizarlos 
// 			tenemos que VOLVER A LANZAR EL  

//! 	<<<	ng serve  >>>

// 			Asi puedo empezar el servidor local de Angular y el Webpack para que nos recompile todo.
// 			(esto si es exitoso nos devuelve un "Compiled successfully")

// 			Para "mostrar los componentes que hemos creado en LA VISTA, los llamo por su nombre puesto en el 'SELECTOR'

//             EJ   selector: 'app-footer',

// 			*Puedo explorar más en https wwww.angular.io / documentation / cli commands



// TODO		EL COMPONENTE CREADO CUENTA 4 ARCHIVOS: 1.ts + 1.html + 1.css + 1spect.ts


//! Puedo crear componentes padres y componentes hijos

// * COMPONENTES PADRES: Se comportan como paginas mismas, es decir son secciones con su propia URL por eso  tienen sus propias rutas hechas 

//  * COMPONENTES HIJOS: Son pequeños componentes dentro de otros.




