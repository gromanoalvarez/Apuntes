/**

*!          APP.MODULE.TS


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
**Para que Peticiones AJAX funcionen:
import { HttpClientModule } from '@angular/common/http'; 
** MODULO y SERVICIO para que anden las rutas y navegar por urls con angular:
import { routing, appRoutingProviders } from './app.routing'; 
**Formulario:
import { FormsModule } from '@angular/forms';
**Librerias:
import { MomentModule } from 'angular2-moment';
import { AngularFileUploaderModule } from 'angular-file-uploader';
**Pipes:
import { EsParPipe } from './pipes/espar.pipe';

**Componentes 
import { AppComponent } from './app.component'; //componente principal SE DEBE PONER EN "declarations" y en "bootstrap"
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

** NO OLVIDAR, instanciar aqui todos los componentes importados
@NgModule({
  declarations: [
    AppComponent, 
    MiComponente,
    PeliculasComponent,
    PruebasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    PeliculaComponent, 
    EsParPipe,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent,
  ],
    **MÓDULOS QUE QUIERO UTILIZAR:
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule,
  ],
  **SERVICIOS
  providers: [appRoutingProviders],
  ** CUAL ES EL COMPONENTE PRINCIPAL QUE VA A ENTRAR A ESTE MÓDULO
  bootstrap: [AppComponent], 
})
export class AppModule {}
 
 */

