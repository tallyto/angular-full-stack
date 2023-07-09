import {Component, OnInit} from '@angular/core'
import {FuncionarioService} from "./funcionario.service";

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css'],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioFormComponent implements OnInit{
  nome = 'Tállyto'
  adicionado = false
  funcionarios: Funcionario[] = [];
  constructor(private funcionarioService: FuncionarioService) {

  }

  adicionar(): void {
    this.adicionado = true
    this.funcionarioService.adicionar(this.nome)
  }

  ngOnInit(): void {
    this.funcionarios = this.funcionarioService.consultar();
  }
}

interface Funcionario {
  nome: string
  id: number
}
