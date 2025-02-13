import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  standalone: false,

})
export class FormularioComponent  implements OnInit {

  items: {movie: string; date: string; Producer: string; Pcasa: string; main: string}[] = [];
  nextId: number = 1; 

  constructor() { }

  addItem(movie: string, date: string, Producer: string, Pcasa: string, main: string,): void 
  {
    if (movie.trim() && date.trim() && Producer.trim() && Pcasa.trim() && main.trim()) {
      this.items.push({
        movie: movie.trim(),
        date: date.trim(),
        Producer: Producer.trim(),
        Pcasa: Pcasa.trim(),
        main: main.trim(),
        
      });
    } else {
      console.error('Los elementos no pueden estar vacios');
    }
  }

  ngOnInit() {}

}
