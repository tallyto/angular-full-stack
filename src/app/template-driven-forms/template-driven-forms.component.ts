import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {

  salvar(form: NgForm) {
    console.log(form.value.nome)
    console.log(form.value.email)
    console.log(form.value.profissao)
  }
}
