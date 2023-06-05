import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import {FuncionarioFormComponent} from "./funcionario-form/funcionario-form.component";
import {TemplateDrivenFormsComponent} from "./template-driven-forms/template-driven-forms.component";
import {PessoaComponent} from "./pessoa/pessoa.component";

const routes: Routes = [
  {path: '', component: FuncionarioFormComponent},
  {path: 'pessoa', component: PessoaComponent},
  {path: 'funcionario', component: FuncionarioFormComponent},
  {path: 'formulario', component: TemplateDrivenFormsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
