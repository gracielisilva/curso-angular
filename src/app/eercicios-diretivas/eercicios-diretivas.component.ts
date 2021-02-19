import { Component } from '@angular/core';

@Component({
  selector: 'app-eercicios-diretivas',
  templateUrl: './eercicios-diretivas.component.html',
  styleUrls: ['./eercicios-diretivas.component.scss']
})
export class EerciciosDiretivasComponent {
  listaFrutas = [
    'Maçã' ,
    'Laranja',
    'Mamão',
    'Pêra',
  ];

  carrosLista=[ {
    placa:'JND-7438',
    cor:'Preto',
  } ,{
    placa: 'JGG-20394' ,
    cor: 'Azul' ,
  },{
    placa:'JND-1230',
    cor:'Branco',
  },{
    placa:'OGK-7095',
    cor:'Vermelho',
  }];

deveExibir = true;

trocarValor(){
  this.deveExibir = !this.deveExibir;
}
soma(numero1, numero2){
  return numero1 + numero2;
}
 
}
