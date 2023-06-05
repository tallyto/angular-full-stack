import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component'
import { CampoColoridoDirective } from './campo-colorido.directive'
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { PessoaComponent } from './pessoa/pessoa.component'
import {registerLocaleData} from "@angular/common";
import ptBr from '@angular/common/locales/pt'
registerLocaleData(ptBr)
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
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
