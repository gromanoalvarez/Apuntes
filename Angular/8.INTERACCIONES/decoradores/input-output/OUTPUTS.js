//todo                  DE HIJO A PADRE
//*      pelicula.component.html a peliculas.component.ts

/**
 *  Creo el button  "seleccionar como favorita" en el hijo y luego en el padre se mostraran los datos de esta favorita

 ** EN EL HIJO pelicula.component.html:
    <button (click)="
*!        seleccionar($event, pelicula)
    ">Seleccionar como Favorita</button>

** EN EL HIJO pelicula.component.ts:
import{Output} from'';
*todo    @Output() MarcarFavorita = new EventEmitter();

*!        seleccionar(event:any, pelicula:any){
*todo           this.MarcarFavorita.emit({
                pelicula: pelicula
          });
  
 
 ** en el PADRE peliculas.component.html:
 *     <div id="articles" *ngIf="peliculas">
          <div *ngFor="let pelicula of peliculas; let i = index">
            <app-pelicula 
              [pelicula]="pelicula"
              [i]="i"
 *todo           (MarcarFavorita)="mostrarFavorita($event)"
            ></app-pelicula>
              <!-- Traje el Output del componente hijo(MarcarFavorita) y hago un metodo donde paso el evento -->
          </div>
    </div>
 *
**   en el PADRE peliculas.component.ts:
            public favorita: Pelicula;
*todo       mostrarFavorita(event:any){
                this.favorita = event.pelicula;
            }
 */