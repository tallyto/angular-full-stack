export class FuncionarioService {
  funcionarios: Funcionario[] = [{id: 1, nome: 'João'}]

  public adicionar(nome: string) : void {
    const funcionario: Funcionario = {id: this.funcionarios.length + 1, nome}
    this.funcionarios.push(funcionario)
    console.log(this.funcionarios)
  }

  public consultar() : Funcionario[] {
    return this.funcionarios;
  }
}

interface Funcionario {
  id: number
  nome: string
}
