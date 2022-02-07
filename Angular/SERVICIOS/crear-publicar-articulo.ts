/**
 * 
 *!         CREACION DE UN COMENTARIO O ARTICULO QUE SE GUARDA EN LA BASE DE DATOS DEL BACKEND


*todo    Ya tengo un componente que actua como button y es para "CREAR ARTICULO"
*!  El button está en la vista del Sidebar: sidebar.component.html >
*?  <a>Crear articulo</a>
La idea es que al darle click se abra un formulario
En el formulario se tiene que poder completar y enviar datos al backend a la base de datos y guardar el articulo como un comentario en un blog.



*!RESOLUCION

*! 1 Creo un componente para el form de un nuevo articulo
*? ng g generate component components/new-article
*? ng serve

*! 2 Creo la ruta en app.routing.ts >
*?  import { ArticleNewComponent} from '';
*?  const appRoutes: Routes = [
*?    {path: 'blog/crear', component: ArticleNewComponent},
*?  ]

*! 3 Hago el vínculo con la directiva [routerLink] en el button que está en la vista del Sidebar: sidebar.component.html >
*?  <a [routerLink]="['/blog/crear']">Crear articulo</a>

*! 4   article-new.component.html >
*todo      Esta es la VISTA del FORMULARIO para crear nuevo artículo, 
*todo       Aca hacemos un FORMULARIO que rellene todas las propiedades del nuevo artículo
 *todo      ya tengo en el hecho un modelo article.ts que coincide con el backend 
 ////......................................
** recordatorio! este es el MODELO para construir articulos: article.ts >
** >>> HACER QUE EL FORM LLENE ESTAS PROPIEDADES>>>
export class Article{
    constructor(
        public _id: string,
        public title: string,
        public content: string,
        public image: string,
        public date: any
    ){}
}
////....................................
<h1>Crear articulo nuevo</h1>
*? <form #articleForm="ngForm" (ngSubmit)="onSubmit()">
*todo       (^ le digo que es un form de angular y creo el evento que disparara al enviar)
    <label for="title">Titulo de la publicación</label>
*?    <input type="text" name="title" #title="ngModel" [(ngModel)]="article.title"  required />
*todo   (^ le pongo un nombre e indico que propiedad del .ts me modificará)
    <small *ngIf= "!title.valid && ticle.touched">
        "El título ingresado no es válido"
    </small>   

    <label for="content">Contenido de la publicación</label>
*?    <input type="text" name="content" #content="ngModel" [(ngModel)]="article.content" required />
    <small *ngIf= "!content.valid && content.touched">
        "El Contenido ingresado no es válido"
    </small> 

    <label for="image">Imagen de la publicación </label>
*?  <input type="file" name="file0" #image="ngModel" [(ngModel)]="article.image"/>
*todo               (^ACA SE PUEDE USAR UN PLUGGING PARA SUBIR IMAGENES EN ANGULAR (ver apunte de librerias-externas), file0 coincide con el params del backend)
*?  <input type="submit" value="Guardar" [disabled]="articleForm.invalid" />
*todo               (^ Indico que si no se cumplen los required no se envie)


*! 5 article-new.component.ts > 
*todo    Tengo que llenar un objeto ( un articulo ) para eso importo su modelo
*?  import{Article} from '';
public article: Article;

constructor(){
    this.article= new Article('','','','',null);
}
onSubmit(){ ////    enviar los datos al backend
    HACER Y CARGAR EL SERVICIO (ver paso 7)
}


*! 6 article.service.ts >
*todo   Hacer un método en el servicio que haga la LLAMADA HTTP a la API REST y guardar el nuevo articulo creado.

*?  create(article:Article):Observable<any>{
        *! tener en cuenta que a la base de datos de la API REST mediante la "llamada http"  NO PUEDO PASAR UN OBJETO LITERAL, "solo puede ir datos numericos o string" por eso hago lo siguiente:
*?      let params =  JSON.stringify(article);
*todo                   (^ 6.A. PARSEAR el article:Article (OBJETO LITERAL) a "JSON STRING")  
*?      let headers = new HttpHeaders().set('Content-Type', 'application/json');
*todo       (^ 6.B. CABECERA Content-Type recibe mi backend)
*?      return this._http.post(this.url+'save', params,{headers:headers};)
*todo       (^ 6.C. HAGO LA PETICION AJAX con post porque vamos a guardar info en el backend - 1ero coincidir con la route creada previamente en el Backend, 2do params es mi articulo que envio, 3ero la cabecera ) 
*?  }


*! 7 article-new.component.ts > 
*todo    usar EL SERVICIO en el evento onSubmit() 
*?  import{Article} from '';
*?  import{ArticleService} from '';
*?  import{Router, ActivatedRoute, Paramas} from '';
*? @Component({etc, providers: [ArticleService]})
export class ArticleNewComponent implements OnInit{
    public article: Article;
    public status:string;
    constructor(
        private _articleService: ArticleService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.article= new Article('','','','',null);
    }
    onSubmit(){ ////    enviar los datos al backend a traves del servicio
*todo   La idea es que si luego al crear el articulo con subscribe recibo una response exitosa entonces me redirija a la vista del /blog
        this._articleService.create(this.article).subscribe(
            response=>{
                if(response.status == 'success'){
                    this.status = 'success';
                    this.article = response.article;
                    this._router.navigate(['/blog']);
                }else{
                    this.status= 'error';
                }
            },
            error=>{
                console.log(error);
                this.status='error';
            }
        );
    }
}

 */