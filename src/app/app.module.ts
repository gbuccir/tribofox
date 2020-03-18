import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaCaixaComponent } from './consulta-caixa/consulta-caixa/consulta-caixa.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaCaixaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
