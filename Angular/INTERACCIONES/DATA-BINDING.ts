//! DATA BINDING >>>   [(ngModel)]="propiedadDeLaClase" 


//TODO ej.      para modificar una propiedad (campo) en la vista y en el modelo o clase (.ts):

//EN EL .HTML VISTA USO:
// *          <input type="text" [(ngModel)]="campo" />

// *     para mostrar lo que estoy modificando en la vista: 
//          {{campo}}

// *todo        <img sro="{{url + 'get.image/' + article.image}}"
// *Todo                   (^ ASOMBROSO!!!LAS LLAVES TRAEN DE TODO!:
//  *todo                   trae la propiedad url que la declare en mi component.ts + 'string para indicar la ruta' + del article su propiedad image)

//EN EL .TS USO:
//          public campo: string;