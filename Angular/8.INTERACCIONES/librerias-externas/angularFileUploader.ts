/**
 * 
    *!  https://www.npmjs.com/package/angular-file-uploader

Install
*?  npm i angular-file-uploader

Uso
a) Opcionalmente podemos hacer link a bootstrap para usar las clases vinculadas a esta libreria
b) importar el modulo en app.module.ts
*?  import {AngularFileUploaderModule} from "angular-file-uploader";
*? imports: [etc, AngularFileUploaderModule]
c)  en el component.html usar la etiqueta:
    <angular-file-uploader
        [config]="afuConfig"
        (ApiResponse)="imageUpload($event)">
    </angular-file-uploader>
d) en el component.ts declarar la siguiente propiedad:
    afuConfig={
        uploadAPI:{
            url:"Global.url+'upload-image'"
        }
    };

    >> HAY OTRAS AfuConfig disponibles para usar, puedes explorar la api de la web nombrada al inicio.
e) en el component.ts hacer el metodo que se activa con el evento para recolectar el nombre de la imagen y guardarlo en la propiedad del articulo:
    imageUploar(data){
        let image_data = JSON.parse(data.response);
        this.article.image = image_data.image;
    }


 */