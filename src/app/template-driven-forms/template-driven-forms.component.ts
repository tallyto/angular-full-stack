import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
class Cliente {
  nome: string | undefined;
  email: string | undefined;
  profissao: string | undefined;
}
@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {
  public cliente = new Cliente();
  public profissoes: string [] = ['Programador', 'Empresario', 'Outra']
  public profissao = 'Outra'
  salvar(form: NgForm) {
    this.cliente.nome = form.value.nome;
    this.cliente.email = form.value.email;
    this.cliente.profissao = form.value.profissao;
    console.log(form)

    console.log(this.cliente)
  }
}

