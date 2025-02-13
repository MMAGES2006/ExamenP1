import { Component } from '@angular/core';
import { ExamenService } from '../examen.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  Quotelist: any = [];


  items: {movie: string; date: string; Producer: string; Pcasa: string; main: string}[] = [];
  nextId: number = 1;  


  constructor(private examenService: ExamenService) {}

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
  

  ngOnInit() {

    this.examenService.getlistQuote().subscribe((data) => {this.Quotelist = data
          })
        }
}
