import { Component } from '@angular/core'

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  nome = 'Tállyto'
  adicionado = false
  funcionarios: Funcionario[] = []

  adicionar (): void {
    this.adicionado = true
    this.funcionarios.push({ nome: this.nome, id: this.funcionarios.length + 1 })
  }
}
interface Funcionario {
  nome: string
  id: number
}
