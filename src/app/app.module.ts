import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaCaixaComponent } from './componentes/consulta-caixa/consulta-caixa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './componentes/dashboard/dashboard/dashboard.component';
import { MovimentacaoDetalheComponent } from './componentes/movimentacao-detalhe/movimentacao-detalhe/movimentacao-detalhe.component';



@NgModule({
  declarations: [
    AppComponent,
    ConsultaCaixaComponent,
    DashboardComponent,
    MovimentacaoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
