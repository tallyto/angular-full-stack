import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component'
import { CampoColoridoDirective } from './campo-colorido.directive'
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { PessoaComponent } from './pessoa/pessoa.component'

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    CampoColoridoDirective,
    FuncionarioFormComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
