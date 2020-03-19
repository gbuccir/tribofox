import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import DesafioCaixas from '../../../../src/assets/DesafioCaixas.json';
import DesafioCaixas from '../../../assets/DesafioCaixas.json';
import { StatusCaixaEnum } from 'src/app/enums/status-caixa-enum.enum';
//import * as $ from 'jquery';



@Component({
  selector: 'app-consulta-caixa',
  templateUrl: './consulta-caixa.component.html',
  styleUrls: ['./consulta-caixa.component.sass']
})
export class ConsultaCaixaComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  public caixas = null

  ngOnInit() {
    this.listarCaixas();
  }

  listarCaixas() {
    ///chamar json para listar os caixas
    const { caixas } = DesafioCaixas
    this.caixas = caixas;
    console.log(this.caixas);

    var difference = this.dateDiffInDays(this.caixas[0].dataAbertura);
    console.log(difference);
  }


  dateDiffInDays(data) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    var a = new Date();
    var b = new Date(data)
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  abreModal(caixa) {
    /// passa caixa como parametro para a modal de dashboard
  }

  pesquisar() {
    /// definir o fluxo
  }


}
