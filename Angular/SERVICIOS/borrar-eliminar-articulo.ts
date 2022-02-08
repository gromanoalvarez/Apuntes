/**
 * !        BORRAR UN ARTICULO DEL BACKEND DESDE EL FRONT
 * todo  La idea es borrar un articulo del backend al apretar el button eliminar desde la vista de un componente mediante un evento, y finalmente nos redirija al blog para checkear los cambios.

*! 1 button.component.html
*? <button (click)="borrarArticulo(article._id)">Borrar</button>

*! 2 button.component.ts
borrarArticulo(id){
*?    this._articleService.delete(id).subscribe(
        response=>{
*?            this._router.navigate(['/blog']);
        },
        error=>{
            console.log(error);
*?            this._router.navigate(['/blog']);
        }
    );
}


 *! 2 article.service.ts > Creo el servicio
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
*todo   (^ Recoge los datos que devuelve la API y nos permite usar el metodo .subscribe para obtener una response o un error.)
import { Global } from './global';

export class ArticleService {
    public url: string;
    constructor(private _http: HttpClient) {
        this.url = Global.url;
    }
    delete(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
*?        return this._http.delete(this.url+'article/'+id, {headers:headers});
    *todo           (^ esto imita la route que tengo desarrollada en el backend)
    *todo           (router.delete('/article/:id', ArticleController.delete);)
)
    }
}

 */