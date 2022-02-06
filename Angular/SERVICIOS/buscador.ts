/**
 * !            BUSCADOR
 * 
*! (1). En sidebar.component.html >
*todo    Crear un Componente que en LA VISTA tenga un FORM ANEXADO A ANGULAR de nombre #searchForm  con "ngForm", donde a su vez tenga un evento (ngSubmit) que nos redirija a OTRA VISTA de los resultados obtenidos a traves del metodo goSearch() que estara en el .ts. Ademas que su INPUT TOME LO INGRESADO  Y LO GUARDE EN UNA VARIABLE del .ts  gracias a la propiedad [(ngModel)] 

    <div id="search">
        <h3>Buscador</h3>
        <p>Encuentra el articulo que buscas</p>
*?      <form #searchForm="ngForm" (ngSubmit)="goSearch()">
*?          <input type="text" name="search" [(ngModel)]="searchString"  />
*?          <input type="submit" name="submit" value="Buscar"/>
*?      </form>
    </div>

*! (2). En sidebar.component.ts >
*?  import{Router, ActivatedRoute, Params} from '@angular/router'
*?  export class SidebarComponent {
*?      public searchString:string;
*?      constructor(
*?          private _router:Router,
*?          private _route: ActivatedRoute
*?      ){}
*?      goSearch(){
*?          this._router.navigate(['/buscar', this.searchString]);
*?      }
* todo   Dentro del metodo goSearch() que se activa cuando doy enviar el input del form, tengo que REDIRIGIR con _router.navigate() A LA RUTA DE MI OTRA VISTA (donde se abriran los resultados de la busqueda). AL mismo tiempo ENVIAR COMO "PARAMETRO URL" el STRING que el [(ngModel)] cargo dentro de mi variable searchString . 
*?  }

*!  (3). Creo el componente que tendra la vista  de los resultados obtenidos
*?  ng g component components/search
    ng serve

*! (4).  En app.routing.ts >
*todo   CREO LA RUTA a ese componente haciendo obligatorio que INGRESE EL "PARAMETRO URL"
  import { SearchComponent } from "./components/search/search.component";
  const appRoutes: Routes = [
*?    {path: 'buscar/:search', component: SearchComponent}
  ];
  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


*! (5). En search.component.ts
*? import {Component, OnInit} from '@angular/core';
*? import {Router, ActivatedRoute, Params} from '@angular/router';
*? import {Article} from ''; ////MODELO
*? import {ArticleService} from ''; ////SERVICIO
@Component({etc, providers: [ArticleService]});
export class SearchComponent implements OnInit{
*?    public articles: Article[];
    public search!:string;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _articleService: ArticleService
    ){}
*todo  Ni bien se ejecuta este componente (por el hook OnInit()) va a "RECOGER EL PARAMETRO":
    ngOnInit(){
*?          this._route.params.subscribe(params=>{
*?          this.search = params['search'];
*todo       Luego enviar el parámetro guardado en this.search al METODO search() del servicio que desarrollaré luego (paso 7, línea 92) y esperar una respuesta o error a través del subscribe();
*?          this._articleService.search(this.search).subscribe(
                response =>{
                    if(response.articles){
*?                      this.articles=response.article;
                        console.log(this.articles);
                    }else{
                        this.articles = []; ////esto es solo para la vista de articulos que no muestre el mensaje de Cargando cuando no haya nada que cargar.
                    }
                },
                error =>{
                    console.log(error);
                    this.articles = [];
                }
            );
        });
    }
}

*! (6). En search.component.html
*todo   Puedo indicar por un @Input [directivaNombre] el título de 'Búsqueda de: ' concatenado con la propiedad search, que es el string buscado:
        <app-slider
            [directivaNombre]="'Busqueda de : ' + search"
            [size]="small"
        ></app-slider>
*todo   Además muestro, detallo el/los resultados de la búsqueda que guarde en mi public articles: Article[];
        <h1>Articulos encontrados: </h1>
        <app-articles
            [articles]="articles"
        ></app-articles>    

*! (7). En services/article.service.ts
*todo   Dentro de los servicios desarrollo el método search() que utilice en la línea 63. Para que realice la búsqueda al BACKEND mediante una PETICIÓN AJAX
import { HttpClient, HttpHeaders } from '@angular/common/http'; ////servicios de protocolo http
import { Global } from './global'; ////para extraer la el inicio de la url

    search(searchString: string):Observable<any>{
       return this._http.get(this.url+'search/'+searchString);
    }











 * 
 * 
 */