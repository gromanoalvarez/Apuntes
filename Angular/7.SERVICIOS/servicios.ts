/**
 * 

*todo       _Servicio: 
**          es una Clase con METODOS, LOGICA y FUNCIONALIDADES.En este proyecto estan vinculadas a las peticiones http que hacemos al api restful.


*TODO       PRIMER EJEMPLO
*!    1ro. CREAR EL SERVICIO  >       ej. peliculas.service.ts : 
*?      import { Injectable } from '@angular/core';
trae el DECORADOR para que cada vez que use el servicio no tenga
que instanciarlo con la palabra reservada NEW y tenerlo disponible siempre
*?      @Injectable()
*?      export class PeliculaService{
            holaMundo(){
                return 'Hola Mundo desde un servicio';
            }
        }

*!      2do. USAR EL SERVICIO >      ej. peliculas.component.ts :
*?      import {PeliculaService}
      @Component({
*?            providers: [PeliculaService]
        })
    export class PeliculasComponent implements OnInit{
      constructor(
*?            private _peliculaService: PeliculaService
        ){}        
      ngOnInit(){
 *?           console.log(this._peliculaService.holaMundo());
        }
    }

**      <<AL CREAR SERVICIOS DEBO REINICIAR EL "ng serve">>
**      <<AL CREAR SERVICIOS DEBO REINICIAR EL "ng serve">>
**      <<AL CREAR SERVICIOS DEBO REINICIAR EL "ng serve">>


******************************************************************

*TODO      SEGUNDO EJEMPLO _Servicio con protocolo HTTP y peticiones AJAX:

Ofrece:
- Comunicación con el Backend (NodeJs)
- Sacar info de la base de datos (MongoDB) y mostrarla en el frontend
(iniciar mongod, usar postman y correr el Api rest con NodeJs).

La ruta en postman para "mostrar todos los artículos" es:
*?     GET>   http://localhost:3900/api/articles
la ruta la cree en el Backend/routes/article.js
*?     router.get('articles/:last?', ArticleController.getArticles); ////:last? es un parametro opcional

*! 1ERO  CREO MODELO (molde para cada Article) >  article.ts ("mismas propiedades" del Backend)
*? export class Article {
    constructor(
        public _id: string,
        public title: string,
        public content: string,
        public image: string,
        public date: any
    ){}
}

*! 2DO  CREO SERVICIO  >   article.service.ts
*? import {Injectable} from '@angular/core';
*? import {HttpClient, HttpHeaders} from '@angular/common/http';
*todo      ( ^ HttpClient para peticiones ajax , HttpHeaders manipula las peticiones y mandar datos)
*? import {Observable} from 'rxjs';
*todo       ( ^ para el tipo de return que se hace en la PETICION AJAX)
*? import {Article} 
        ( ^ modelo creado en el paso anterior)
*!(6to) import {Global} from '';
@Injectable()
*todo   export class ArticleService{
*?            public url: string;
            constructor(
*?              private _http: HttpClient
            ){
*?                this.url= Global.url;
            }
            probando(){
                return "Soy el servicio de articulos";
            }
*!(7mo) Uso el servicio HTTP(imito la ruta del backend) 
*!              y hago la PETICION AJAX!!!
*?          getArticles(last:any = null):Observable<any>{
*?              const articles = 'articles';
                if(last != null){
*?                    articles = 'articles/true';
                }
*TODO           return this._http.get(this.url+articles);
            }
        }

*! 3ro PARA QUE FUNCIONE HttpClient > app.module.ts
*?  import {HttpClientModule} from '@angular/common/http';
            ( ^ para que funcionen las PETICIONES AJAX)
*?  imports: [HttpClientModule]

*! 4TO USO > blog.component.ts
*?  import {ArticleService} from ''
*?  import {Article} from 'models/article'
@Component({
*?    providers: [ArticleService]
})
*! (9no) para pasar la response a la vista
*? public articles: Article[];
constructor(
*?    private _articleService: ArticleService
){}
ngOnInit(){
*?    console.log(this._articleService.probando());
*! (8vo) utilizo el metodo getArticles de la PETICION AJAX con el "metodo subscribe() del observable"
*?   this._articleService.getArticles().subscribe(
      {
        next: (response) => {
                *! (10mo) guardo la response en la variable articles
          if(response.articles){
*?          this.articles = response.articles;
          }
        },
        error: (error) => console.log(error)
      }
    );


}
*! 11avo muestro los titulos de cada articulo del backend en la vista > blog.component.html
*?    <div class="article-item" ngFor="let article of articles">
*?        <h2>{{article.title}} </h2>
*?    </div>


**      <<AL CREAR SERVICIOS DEBO REINICIAR EL "ng serve">>
**      <<AL CREAR SERVICIOS DEBO REINICIAR EL "ng serve">>
**      <<AL CREAR SERVICIOS DEBO REINICIAR EL "ng serve">>


*! 5to preparo la const a utilizar en la PETICION AJAX > global.ts
export const Global = { url: 'http://localhost:3900/api/' };


<<<Si quisiera mostrar solo 5 articulos y usar el parametro opcional en la linea 109 puedo pasarlo como getArticles(true). 
De hecho en otro componente el home.component.ts se reutiliza este metedo pero con parametro opcional agregado asi muestra menos articulos>>>


*TODO               TERCER EJEMPLO: traer del Backend datos de "un articulo" para su vista detallada

*! (1)metodo que hace la PETICION AJAX en el servicio > article.service.ts
getArticle(articleId):Observable<any>{
    ////_http es para la PETICION AJAX 
    ////.GET es el metodo Http de la ruta del Backend
    return this._http.get(this.url+'article/'+articleId);
}

*! (2)Componente de un solo articulo, detallado > article.component.ts
*? import{ArticleService} from ''; ////servicio
*? import{Article} from''; ////modelo
*? import{Router,ActivatedRoute, Params} from '@angular/router';
            (^ RECOGE PARAMETROS POR URL, params trae el metodo subcirbe para recoger parametros)
@Component({
        etc,
*?      providers: [ArticleService]
})
export class ArticlesComponent implements OnInit{
*?      public article: Article; ////creo el objeto que guardara lo que se traiga del Backend
    constructor(
        ////Inyectar los servicios y rutas con sus parametros
*?       private _articleService: ArticleService,
*?        private _route: ActivatedRoute,
*?        private _router: Router
    ){}
    ngOnInit(){////cuando abro/inicio el componente se ejecuta
*todo  (para recoger los datos que llegan por parametro URL del Backend)  
*?      this._route.params.subscribe(params => {
            let id = params['id'];

*?      this._articleService.getArticle(id).subcribe(
*?          response=> {
*?              if(response.article){
*?                  this.article = response.article;
 *!                           (^ aca ya guarde el articulo de la respuesta en la variable article para usar en el frontend!!!)
*?              }else{
                 (^ sino hay un articulo en la respuesta me redirige con el _router.navigate a ['/home'])
*?                  this._router.navigate(['/home']);    
*?              }
*?          },
*?          error=>{
*?              console.log(error);    
*?              this._router.navigate(['/home']);    
*?          }    
*?      );
 //utilizo el metodo getArticle() del servicio para traer un articulo del backend

        });
    }
}
*! (3) En LA VISTA ya puedo extraer de mi "variable: article" mediante llaves de interpolacion sus propiedades(ej. title)y rellenar contenido de los componentes tanto de texto como de imagenes segun lo que traiga el article > article.component.html

<article class="article-item article-detail">
    <div class?"image-wrap">
*todo        <img sro="{{url + 'get.image/' + article.image}}"
*Todo                   (^ ASOMBROSO!!!LAS LLAVES TRAEN DE TODO!:
*todo                   trae la propiedad STRING url que la declare en mi article.component.ts + 'STRING para indicar la ruta' + del article su propiedad STRING image)
    </div>
*?    <h1 class="subheader">{{article.title}}</h1>
*?     <p>{{article.content}}</p>


//! NO OLVIDAR import {Global} para guardarlo en la propiedad STRING url . Si esto no se hace no funciona la direccion, lo mismo pasa si hay un error en la respuesta y no hay un articulo con esa propiedad, el string con el que se nombra LA IMAGEN/FOTOGRAFIA en el frontend > article.component.ts 

import{Component, resto de hooks};
import{Router, ActivatedRoute,Params};
*?import {Global};
import{Servicios};
import{Modulo};
export class ArticleComponent implements OnInit{
*?  public articles: Articles;
*?  public url: string;
    constructor(){
*?        this.url = Global.url;    
    }
}

 *
 */



