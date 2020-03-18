import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaCaixaComponent } from './consulta-caixa/consulta-caixa/consulta-caixa.component';

const routes: Routes = [
  { path: '', component: ConsultaCaixaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
