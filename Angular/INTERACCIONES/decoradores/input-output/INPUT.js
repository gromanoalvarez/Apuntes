//! PASAR INFORMACION ENTRE COMPONENTES


//todo                DE PADRE A HIJO
//!     (de app.component.html a slider.component.ts)

//! PRIMERO "DIRECTIVA" EN EL PADRE 
//* para pasarle al HIJO
//!        <app-slider [directivaParaInput]=
//                  "Hola desde el componente padre">
//?        </app-slider>

//! SEGUNGO USO EL DECORADOR @INPUT EN EL HIJO  
//? export class SliderComponent implements OnInit{
//!   DECORADOR 
//!       V   
//?    @Input() directivaParaInput!: string;
//!             TERCERO  declaro "directivaParaInput"
//?    constructor(){}
//?    ngOnInit(){}
//? }


