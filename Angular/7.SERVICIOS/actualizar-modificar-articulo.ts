/**
 *!             MODIFICACION DE UN ARTICULO VIEJO
 La idea es crear el servicio donde al pasarle un id (para buscar el articulo a modificar) y un nuevo articulo con los datos actualizados modifique los datos viejos.

 *! 1   BUTTON.component.html
 *todo  Hacer un button que luego hara ruta a la vista de editar un componente
 <button>Editar</button>

*! 2 Crear componente de article-edit
*?  ng g component components/article-edit
*?  ng serve

*! 3 Creo la ruta en app.routing.ts
const appRoutes: Routes =[
    {path: 'blog/editar/:id', component: ArticleEditComponent}
]
*! 4 uso la ruta en BUTTON.component.html
 <button [routerLink]="['/blog/editar', article._id]">Editar</button>

 *! 5 en article-edit.component.ts
 *todo a) Uso la vista que ya esta creada en article-new, para ello suplanto en el decorador @Component el templateUrl (copiar tambien sus imports y providers, mas lo que se inicia en el constructor y los metodos, practicamente reutilizo todo)
 @Component({
     templateUrl: '../article-new/article-new.component.html',
 })
 *todo  b) Para diferenciar cuando uso la edicion creo la variable boolean is_edit
 public is_edit:boolean;
 constructor(){
     this.is_edit=true;
 }
 *todo  c) Puedo mostrar el formulario relleno de los datos del articulo que queremos editar, para obtener estos valores ni bien se abre el componente de editar uso el metodo getArticle() en el OnInit
 ngOnInit(){
     getArticle();
 }
 getArticle(){
     this._route.params.subscribe(params=>{
        let id = params['id'];
        
        this._articleService.getArticle(id)subscribe(
            response=>{
                if(response.article){
                    this.article=response.article;
                }else{
                    this._router.navigate(['/home']);
                }
            },
            error=>{
                console.log(error);
                this._router.navigate(['/home']);
            }
        );
     });
 }
*todo   d) Ya puedo actualizar, modificar el articulo y con  los nuevos datos ni bien se ejecute el evento onSubmit() paso a utilizar el servicio.update() - desarrollado en paso 7- 
onSubmit(){
    this._articleService.update(this.article._id, this.article).subscribe(
        response=>{
                if(response.status == 'success'){
                    this.status = 'success';
                    this.article = response.article;

                    this._router.navigate(['/blog/articulo', this.article._id]);
*todo                      (^para que luego de actualizar abra su vista detallada)
                }else{
                    this.status = 'error';
                }
            },
            error=>{
                console.log(error);
                    this.status = 'error';
            }
    );
}
 
 *! 6 en la vista compartida de article-new.component.html
 *todo ahora puedo diferenciar con un *ngIf que hacer segun el valor de la propiedad is_edit. Por ejemplo mostrar la imagen previa en miniatura

 *! 7 article.service.ts>
import { HttpClient, HttpHeaders } from '@angular/common/http'; //servicios de protocolo http
import { Observable } from 'rxjs'; //Recoge los datos que devuelve la API
import { Global } from './global';

export class ArticleService {
    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
*?    update(id, article):Observable<any>{
    *todo  Recordar que el backend solo recibe string o number por eso el article debo parsearlo a un json string. y ademas el envio debe hacerce con una CABECERA.
*?        let params = JSON.stringify(article);
*?        let headers = new HttpHeaders().set('Content-Type,'application/json');

*?        return this._http.put(this.url+'article/'+id, params, {headers:headers});
    *todo           (^ esto imita la route que tengo desarrollada en el backend)
*todo               (^ router.put('/article/:id', ArticleController.update);)

    }
}


 */