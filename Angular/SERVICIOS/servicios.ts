/**
 * 

*todo       _Servicio: 
**          es una Clase con METODOS, LOGICA y FUNCIONALIDADES.

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

*TODO      _Servicio con protocolo HTTP y peticiones AJAX:

Ofrece Comunicacion con el Backend (NodeJs)
Sacar info de la base de datos (MongoDB) y mostrarla en el frontend
(iniciar mongod, usar postman y correr el Api rest con NodeJs).

La ruta en postman para "mostrar todos los artículos" es:
*?     GET>   http://localhost:3900/api/articles
la ruta la cree en el Backend/routes/article.js
*?     router.get('articles/:last?', ArticleController.getArticles);

*! 1ERO  CREO MODELO  >     article.ts (con mismas propiedades del backend)
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
import {Injectable} from '@angular/core';
*? import {HttpClient, HttpHeaders} from '@angular/common/http';
(para peticiones ajax , manipular las peticiones y mandar datos)
import {Observable} from 'rxjs';
*? import {Article} (creado en el paso anterior)
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
*!(7mo) uso el servicio HTTP(imito la ruta del backend) y hago la PETICION AJAX
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
(para que funcionen las PETICIONES AJAX)
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


*! 5to preparo la const de la PETICION AJAX > global.ts
export const Global = { url: 'http://localhost:3900/api/' };



<<<Si quisiera mostrar solo 5 articulos y usar el parametro opcional en la linea 109 puedo pasarlo como getArticles(true). 
De hecho en otro componente el home.component.ts se reutiliza este metedo pero con parametro opcional agregado asi muestra menos articulos>>>

 *
 */



