import {Component, OnInit} from '@angular/core';
import {CidadeService} from "./cidade.service";

interface Cidade {
  nome: string;
  id: number
}

interface Alert {
  type: 'success' | 'danger';
  message: string;
}

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css'],
  providers: [CidadeService],
})
export class CidadeComponent implements OnInit {
  public cidades: Cidade[] = [];
  public nome = '';
  public alerts: Alert[] = [];

  constructor(private cidadeService: CidadeService) {
  }

  ngOnInit(): void {
    this.atualizarCidades();
  }

  adicionar(): void {
    if (!this.nome) {
      return;
    }

    this.cidadeService.adicionar({nome: this.nome})
      .subscribe(
        {
          next: () => {
            this.adicionarAlerta('success', 'Cidade foi adicionada com sucesso!');
            this.nome = '';
            this.atualizarCidades();
          },
          error: (err: Error) => {
            this.adicionarAlerta('danger', err.message);
          }
        }
      );
  }

  atualizarCidades(): void {
    this.cidadeService.consultar()
      .subscribe(
        {
          next: (value) => {
            this.cidades = value as Cidade[];
          },
          error: (err: Error) => {
            this.adicionarAlerta('danger', err.message);
          }
        }
      );
  }

  adicionarAlerta(type: 'success' | 'danger', message: string): void {
    this.alerts.push({type, message});
  }

  fecharAlerta(alert: Alert): void {
    const index: number = this.alerts.indexOf(alert);
    if (index !== -1) {
      this.alerts.splice(index, 1);
    }
  }

  atualizar(cidade: Cidade) {
    this.cidadeService.atualizar(cidade).subscribe(
      {
        next: () => {
          this.adicionarAlerta("success", "Cidade atualizada com sucesso!")
          this.atualizarCidades()
        },
        error: (err) => {
          this.adicionarAlerta("danger", err.message)
        }
      }
    )
  }

  excluir(id: number) {
    this.cidadeService.excluir(id).subscribe(
      {
        next: () => {
          this.adicionarAlerta("success", "Cidade removida com sucesso!")
          this.atualizarCidades()
        },
        error: (err) => {
          this.adicionarAlerta("danger", err.message)
        }
      }
    )
  }
}
