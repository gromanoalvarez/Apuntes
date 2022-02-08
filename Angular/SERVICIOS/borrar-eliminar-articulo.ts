/**
 * 
 La idea es poder borrar un articulo del backend al apretar el button eliminar desde la vista de un componente

 *! article.service.ts > Creo el servicio
import { HttpClient, HttpHeaders } from '@angular/common/http'; //servicios de protocolo http
import { Observable } from 'rxjs'; //Recoge los datos que devuelve la API
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