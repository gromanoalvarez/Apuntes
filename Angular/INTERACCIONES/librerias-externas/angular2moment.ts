/**
 *!   www.npmjs.com/package/angular2-moment

*Formatear las fechas a gusto:
1.Instalar
*?  npm install --save angular2-moment
2.App.module
*? import {MomentModule} from 'angular2-moment';
*? imports: [MomentModule]
3.En la vista mediante llaves de interpolacion 
Se indica a traves de "pipes"
    <span class="date">
*?    {{article.date | amLocale: 'es'| amTimeAgo}}
    </span>
 */