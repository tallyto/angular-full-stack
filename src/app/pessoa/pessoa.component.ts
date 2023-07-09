import {Component} from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {
  nome = 'Tállyto Rodrigues'
  dataAniversario = new Date(1996, 4, 6);
  preco = 12855.32;
  troco = 0.57392;

}
