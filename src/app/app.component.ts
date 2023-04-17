import { Component } from '@angular/core'

interface funcionario {
  nome: string
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Tállyto'
  adicionado = false
  funcionarios: funcionario[] = []

  adicionar (): void {
    this.adicionado = true
    this.funcionarios.push({ nome: this.nome, id: this.funcionarios.length + 1 })
  }

  alterarNome ($event: any): void {
    this.nome = $event.target.value
  }
}
