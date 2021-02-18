import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  texto = 'A vida é Linda';
  palavra = 'CARRO';
  favotitaColor = 'green';
  constructor(){}

  eventoRecebido($event) {
    console.log('AppComponent: EVENTO RECEBIDO!', $event);
  }
  
}
