import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {
  @Input() // deixa a variável visível para o componente pai
  funcionario: any;

  getEstilosCartao() {
    return {
      'border-width.px': this.funcionario.id,
      'background-color': this.funcionario.id % 2 == 0 ? 'lightblue' : 'lightgreen'
    }
  }

}

