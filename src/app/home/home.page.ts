import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  items: {movie: string; date: string; Producer: string; Pcasa: string; main: string}[] = [];
  nextId: number = 1;  

  constructor(public navCtrl: NavController) {}


  addItem(movie: string, date: string, Producer: string, Pcasa: string, main: string): void 
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
      console.error('El nombre y la fecha no pueden estar vacios');
    }
  }

}
