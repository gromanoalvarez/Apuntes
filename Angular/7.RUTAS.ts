                    
                    /* ! app.routing.ts 
1.Importar los módulos del router de angular   y crear rutas para moverse a traves de la url 
? import { ModuleWithProviders  } from "@angular/core"; //Esta clase importada permite generar un modulo para tenerlo todo separado y cargarlo  dentro del framework 
? import { Routes, RouterModule } from '@angular/router'; //Permitir generar objetos de rutas y el modulo para configurar el frameworks de angular

//2.Importar COMPONENTES COMO PÁGINA EXCLUSIVA
? import { HomeComponent } from "./components/home/home.component";
? import { BlogComponent } from "./components/blog/blog.component";

//3.Array de rutas, configuracion de las rutas
//es una constante que guarda el array de clase Routes que contiene objetos json que son cada ruta
//la ruta vacia es la predeterminada cuando carga la pagina
const appRoutes: Routes = [
*   { //RUTA VACIA
        path: '', component: HomeComponent
    },
*    { // PARAMETRO OBLIGATORIO
        path: 'buscar/:search', component: SearchComponent
    },
*    {//B) SI DUPLICO LA RUTA LA TRANSFORMA PARAMETRO OPCIONAL: Creando una ruta "ANTES" que sea similar pero sin parametro extra
        path: 'pagina-de-pruebas', component: PaginaComponent
    },    
*    {//A) PARAMETRO OBLIGATORIO, si no lo pongo me tira a errorComponent
        path: 'pagina-de-pruebas/:nombres/:apellidos', component: PaginaComponent
    },
*    { //RUTA DE ERROR//(el path de error ** debe ir si o si al final)
        path: '**', component: ErrorComponent
    }
];



//4.Exportar el modulo de rutas:
! export const appRoutingProviders: any[] = []; //SERVICIO
! export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); //MODULO

================================================================================

!!! INTERACTUAR con los PARAMETROS FIJO Y OBLIGATORIO de la  URL: !!!
TODO        path: 'pagina-de-pruebas/:nombres/:apellidos', component: PaginaComponent

1) Ir al pagina.component.TS
2) import {Router, ACtivatedRoute, Params} from '@angular/router';
3) cargar en el constructor(private _route: ActivatedRoute, // saca los params de URL !!!!
                            private _router: Router){}      // Redirecciona 
4) ngOnInit(){
    this._route.params.subscribe((params:Params)=>{         //subscribe() es un observable para asincronos
        this.variableCreadaAntes1 = params.nombres;
        this.variableCreadaAntes2 = params.apellidos;
    });
}
5) hacer lo que desee con la variableCreadaAntes (podria pasarlos a la vista con {{variableCreadaAntes}})

=============================================================================

!!! REDIRECCIONES Y PASAR PARAMETROS !!!
se usa el _router + routerNavegate
 ej. button de la VISTA con evento click
        <button (click)="rediregir()">
 En la Clase.ts del componente donde esta el button debo declarar el metodo:
        redirigir(){
            this._router.navigate(['/formulario', puedo PASAR PARAMETROS X URL!!!]);
        }
 */