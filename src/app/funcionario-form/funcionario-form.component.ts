import {Component, OnInit} from '@angular/core'
import {FuncionarioService} from "./funcionario.service";
import {LogService} from "../log.service";

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css'],
  providers: [
    FuncionarioService,
    LogService,
    {provide: 'LogPrefixo', useValue: 'Log' }
  ]
})
export class FuncionarioFormComponent implements OnInit{
  nome = 'Tállyto'
  adicionado = false
  funcionarios: Funcionario[] = [];
  constructor(
    private funcionarioService: FuncionarioService,
    private logService: LogService
  ) {

  }

  adicionar(): void {
    this.adicionado = true
    this.logService.log(`Adicionando ${this.nome}`)
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
