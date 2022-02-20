/**     
 * !        VISTAS o PLANTILLAS (HTML)
 * 
 * !   1RO. INDEX.HTML (Donde se ejecuta La vista principal)
 ** Aqui tengo el <head> y el <body>
 * 
 * todo  a)   Dentro del <head> puedo introducir por <link> la hoja de STYLES.CSS pero es conveniente configurarlo dentro del fichero {}angular.json en la seccion de "styles":[" aqui va la dirección donde se ubica mi styles.css principal"]
 * 
 * todo  b)   Dentro del <body> tengo la etiqueta del "componente principal" <app-root> declarado en app-module.ts
 * 
 * !    2DO. <APP-ROOT> ES LA ETIQUETA DEL COMPONENTE PRINCIPAL: APP-COMPONENT.HTML (declarado en app-module.ts)   
 ** Aquí puedo utilizar etiquetas de COMPONENTES FIJOS (como el header y footer) para  que se muestren en todas las pestañas igual y el <router-outlet>:

//? <app-header></app-header>
//!       <router-outlet></router-outlet>
//? <app-footer></app-footer>

 //!   3. <ROUTER-OUTLET>
 //!  Revisa todas las URL de las rutas creadas en app.routing.ts y asocia la vista del COMPONENTE PRINCIPAL directamente a cada vista para ir mostrando diferentes vistas sin necesidad de refrescar la página (por esta razon es una SPA - single page application)!!! -->

 */