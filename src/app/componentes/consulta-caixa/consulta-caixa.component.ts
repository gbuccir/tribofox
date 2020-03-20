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

    var difference = this.dateDiffInDays(this.caixas[0].dataAbertura);

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

  abreDashboard(caixa) {
    /// passa caixa como parametro para a modal de dashboard
    this.caixaSelecionado = caixa.id
  }

  pesquisar() {
    /// definir o fluxo
    this.caixas = this.caixasAux;
    this.caixas = this.caixas.filter(n => n.codigoPublico == this.pesquisa.codigo)
  }


}
