//todo               Pasar dato desde componenten HIJO a PADRE
//*      pelicula.component.html a peliculas.component.ts

/**
 *  Creo el button  "seleccionar como favorita" en el hijo y luego en el padre se mostraran los datos de esta favorita

 ** pelicula.component.html (HIJO):
*?   <button (click)="seleccionar($event, pelicula)">Seleccionar como Favorita</button>

**  pelicula.component.ts (HIJO):
*? import{Output} from'';
*? @Output() MarcarFavorita = new EventEmitter();
*?        seleccionar(event:any, pelicula:any){
*?           this.MarcarFavorita.emit({
                pelicula: pelicula;
          });
 
 ** peliculas.component.html (PADRE porque tiene la etiqueta <app-pelicula>):
 *     <div id="articles" *ngIf="peliculas">
          <div *ngFor="let pelicula of peliculas; let i = index">
*?            <app-pelicula 
              [pelicula]="pelicula"
              [i]="i"
 *?           (MarcarFavorita)="mostrarFavorita($event)"
 *?           ></app-pelicula>
*todo     Traje el Output del componente hijo(MarcarFavorita) y hago un metodo donde paso el evento
          </div>
    </div>
 *
**   peliculas.component.ts (PADRE):
            public favorita: Pelicula;
*todo       mostrarFavorita(event:any){
                this.favorita = event.pelicula;
            }
 */