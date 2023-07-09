import {LogService} from "../log.service";
import {Injectable} from "@angular/core";

@Injectable()
export class FuncionarioService {
  funcionarios: Funcionario[] = [{id: 1, nome: 'João'}]

  constructor(private logService: LogService) {
  }
  public adicionar(nome: string) : void {
    this.logService.log(`Adicionando nome ${nome}...`)
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
