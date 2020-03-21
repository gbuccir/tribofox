import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import DesafioCaixas from '../../../assets/DesafioCaixas.json';
import { StatusCaixaEnum } from 'src/app/enums/status-caixa-enum.enum';
//import * as $ from 'jquery';

// explicação do problema encontrado no JSON na propriedade codigoPublico
// https://stackoverflow.com/questions/10631494/json-parse-parses-converts-big-numbers-incorrectly

@Component({
  selector: 'app-consulta-caixa',
  templateUrl: './consulta-caixa.component.html',
  styleUrls: ['./consulta-caixa.component.scss']
})
export class ConsultaCaixaComponent implements OnInit {

  constructor() {

  }

  @Output()
  emitir = new EventEmitter<any>();
  caixaSelecionado = null


  modalFechada() {
    this.caixaSelecionado = null;
  }

  public caixas = null;
  private caixasAux = null;
  public pesquisa = {
    codigo: "",
    dataInicio: "",
    dataFim: "",
  };
  public StatusCaixaEnum = StatusCaixaEnum;

  ngOnInit() {
    this.listarCaixas();
  }

  listarCaixas() {
    ///chamar json para listar os caixas
    const { caixas } = DesafioCaixas
    this.caixas = caixas;
    this.caixasAux = caixas;

    console.log(this.caixas);

    var difference = this.daysBetween(this.caixas[0].dataAbertura, this.caixas[0].dataFechamento);

    this.caixas.forEach(element => {
      element.Diferenca = this.daysBetween(element.dataAbertura, element.dataFechamento)
    });

    console.log(difference);
  }


  daysBetween = function (date1, date2?) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    date1 = new Date(date1);
    if (!date2)
      date2 = new Date();
    else
      date2 = new Date(date2);
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
    //take out milliseconds
    difference_ms = difference_ms / 1000;
    var seconds = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var minutes = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var hours = Math.floor(difference_ms % 24);
    var days = Math.floor(difference_ms / 24);

    return days + 'D:' + hours + 'H:' + minutes + 'M:' + seconds + 'Seg';
  }

  // dateDiffInDays(data) {
  //   const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  //   var a = new Date();
  //   var b = new Date(data)
  //   // Discard the time and time-zone information.
  //   const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  //   const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  //   return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  // }

  abreDashboard(caixa) {
    /// passa caixa como parametro para a modal de dashboard
    this.caixaSelecionado = caixa.id
  }

  pesquisar() {
    /// definir o fluxo

    if (this.pesquisa.codigo !== '' || this.pesquisa.dataInicio !== '' || this.pesquisa.dataFim != '')
      this.caixas = this.caixas.filter(i => i.codigoPublico == this.pesquisa.codigo || new Date(i.dataAbertura).getTime() == new Date(this.pesquisa.dataInicio).getTime());
    else
      this.caixas = this.caixasAux;

  }


}
