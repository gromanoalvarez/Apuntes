                    
/* 
                    ! app.routing.ts (crear el archivo manualmente)

todo     Sirve para Importar los módulos del router de angular  y crear rutas para moverse a través de la URL y  que estas rutas seandetectadas por el <router-outlet> de mi vista principal app-compontent.html el cual se ejecuta en mi index.html . Asi evito usar los componentes de manera estática.


1.a Esta clase importada permite generar un módulo para tenerlo todo separado y cargarlo  dentro del framework:
? import { ModuleWithProviders  } from "@angular/core"; 

1.b Permitir generar objetos de rutas y el módulo para configurar el frameworks de angular:
? import { Routes, RouterModule } from '@angular/router'; 

2.Importar todos los COMPONENTES que actuan COMO PÁGINA EXCLUSIVA:
? import { HomeComponent } from "./components/home/home.component";
? import { BlogComponent } from "./components/blog/blog.component";

3.Array de rutas para la configuración de las rutas
(Es una constante que guarda el array de clase Routes que contiene objetos json de cada ruta.
La ruta vacia es la predeterminada cuando carga la página y debe declararse al final)
?  const appRoutes: Routes = [
*   RUTA VACIA
?        {path: '', component: HomeComponent},
*    PARAMETRO OBLIGATORIO
?        {path: 'buscar/:search', component: SearchComponent},
*    B) SI DUPLICO LA RUTA LA TRANSFORMA PARAMETRO OPCIONAL: Creando una ruta "ANTES" que sea similar pero sin parametro extra
?        {path: 'pagina-de-pruebas', component: PaginaComponent},    
*    A) PARAMETRO OBLIGATORIO, si no lo pongo me tira a errorComponent
?        {path: 'pagina-de-pruebas/:nombres/:apellidos', component: PaginaComponent},
*    RUTA DE ERROR//(el path de error ** debe ir si o si al final)
 ?       {path: '**', component: ErrorComponent}
?   ];

4.Exportar el módulo de rutas:
! export const appRoutingProviders: any[] = []; //SERVICIO
! export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); //MODULO

===============================================================================

!!! PASAR PARÁMETROS POR URL (ActivatedRouter, Params) 
TODO        {path: 'pagina-de-pruebas/:nombres/:apellidos', component: PaginaComponent},

Ir al pagina.component.TS para utilizar la clase PaginaComponent:
? import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({})
export class PaginaComponent implemente OnInit{
 constructor(
?    private _route: ActivatedRoute){} // saca los params de URL !!!!
 ngOnInit(){
?    this._route.params.subscribe((params:Params)=>{ //subscribe() es un observable para asincronos
*        this.variableCreadaAntes1 = params.nombres;
*        this.variableCreadaAntes2 = params.apellidos;
    });
 }
}
* Hacer lo que desee con la variableCreadaAntes (podría pasarlos a la vista con {{variableCreadaAntes}})

=============================================================================

!!! REDIRECCIONES (Router)   
Ej. Si tengo un button de la VISTA con evento click
        <button (click)="rediregir()">
 En la Clase.ts del componente donde esta el button debo declarar el metodo:
? import {Router, ActivatedRoute, Params} from '@angular/router';
 constructor(
?    private _router: Router){}     
        redirigir(){
?            this._router.navigate(['/formulario', luego de la coma también puedo PASAR PARAMETROS X URL!!!]);
        }

todo    También puedo pasar parámetros por URL cuando uso la directiva routerLink luego de la coma: [routerLink]="['/home', parámetros que deseeo enviar]"

 */
