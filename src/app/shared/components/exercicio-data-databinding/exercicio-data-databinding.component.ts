import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-databinding',
  templateUrl: './exercicio-data-databinding.component.html',
  styleUrls: ['./exercicio-data-databinding.component.scss']
})
export class ExercicioDataDatabindingComponent implements OnInit {

  @Input() palavra:string;
  @Input() color:string;
  @Output() clicado = new EventEmitter();

  imageURL = 'https://i.ytimg.com/vi/ewxKgcqr4eA/mqdefault.jpg';
  initialValue = 'Valor inicial';
  isDisabled = true;
  accessibilityText = 'Um Texto Acessível';

  valorDoInput ='';
  
  valorContador = 10;
  
  constructor() { 
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 5000);
  }

  ngOnInit(): void {
  }
  getImageURL() {
    return this.imageURL;
  }
  onClick($event) {
    console.log('clicou!', $event);
  }
  digitouAlgo($event){
    this.valorDoInput = $event.target.value;
    console.log($event);
  }

  passouMouse(){
    console.log('Alguém passou Mouse');
  }

  onClickBotaoEmissor($event){
    console.log('Devo emitir informações para o componente PAI.');
    this.clicado.emit($event);
  }
 
}
