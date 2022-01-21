
//! A) MONGO

//! B) NODE

//! C) ANGULAR INSTALACION con CMD:

//*     npm install -g npm@latest
//*     npm cache clean --force
//*     npm set audit false
//*     npm uninstall -q angular-cli
//*     npm uninstall -g @angular/cli
//*     npm cache clean --force
//*     npm install -g @angular/cli@latest

// ../directorio del proyecto
//?     ng new

// (al cuestionario con opciones-> Enter)

// luego:
// ?    ng serve

// localhost:4200

// TODO     0) VINCULAR STYLE.CSS GENERAL en ANGULAR.JSON
//?     angular.json/"assets":[src/assets/css/styles.css],
// <puede que sea necesario cortar la ejecución de ng serve y relanzarla para que lo cargue>

// 1) GENERAR COMPONENTE.ts NUEVO:
//?     ctrol+C (dentro del directorio salir de angular)
// ?    ng generate component folderComponents/componentName
// ?    ng serve (reactivar angular)

// Edito en la "Clase" las propiedades, el constructor y los métodos todo con TypeScript.

// TODO 2) IMPORT "Clase" del COMPONENTE EN MODULE.ts
// ?    @NgModule({declarations:[AppComponent], imports[],providers[],etc})

// Ya puedo usar la etiqueta selectora del componente en cualquier vista usar las veces que quiera.

// TODO 3) IMPORT "MODULOS DEL ROUTER" en ROUTING.ts
//  ?   import {ModuleWithProviders} from '@angular/core;
//   ?  import {Routes, RouterModule} from '@angular/router;

// TODO 4) IMPORT "COMPONENTES PADRES"  (home, blog, etc) en ROUTING.ts
//    ? import {HomeComponent} from 'direccion'

// TODO 5) ARRAY DE RUTAS en ROUTING.TS 
//     ? const appRoutes:Routes=[{path:'home', components:HomeComponent}, etc];

// TODO 6) EXPORTAR ROUTING.TS
//     ? export const appRoutingProviders: any[]=[]; //SERVICIO
//?     export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes); //MODULO

// TODO 7) IMPORT LAS 2 VARIABLES DEL ROUTING EN APP.MODULE
//?      imports:[routing], //MODULO
//?     providers:[appRoutingProviders] //SERVICIO

// TODO 8) Para que el router funcione  en app.component.html usar la etiqueta:
//?     <router-outlet></router-outlet>

// Esto evitará que sea estático, ya que detecta sobre ruta estoy o deseo y llama a su componente.

// 9)




// ===========================================================================================
// Comandos Angular:
// +New Component
//     ng generate component carpeta/nombre
// + Angular Material
//     ng add @angular/material
// + Add PWA Support
//     ng add @angular/pwa
// + Add Dependency
//     ng add _____
// + Run and Watch Tests
//     ng test

// + Build for Production
// ng build
