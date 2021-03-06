import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import DesafioCaixas from '../../../../assets/DesafioCaixas.json';
import * as $ from 'jquery';
import { OrigemEnum } from 'src/app/enums/origem-enum.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public caixaDetalhe = null;


  @Input()
  caixaSelecionado: any

  @Output() //Output para a consulta caixa
  fecharModal = new EventEmitter<any>();

  @Output() // paraa modal movimentacao
  emitir = new EventEmitter<any>();
  movimentacaoDetalhe = null
  origem = null

  fechar() {
    this.fecharModal.emit();
    $('#myModal').css("display", "none");
  }

  ngOnInit() {
    $('#myModal').css("display", "block");
    this.encontrarDetalheporId()
  }


  encontrarDetalheporId() {
    const { caixas_detalhes } = DesafioCaixas;

    this.caixaDetalhe = caixas_detalhes.filter(c => c.caixa.id == this.caixaSelecionado)[0].caixa;
    if (this.caixaDetalhe.usuarioFechamento == null || this.caixaDetalhe.usuarioFechamento == 'undefined') {
      this.caixaDetalhe.dataFechamentoNull = "--:--"
    }

    let { totais } = this.caixaDetalhe;
    let { movimentacoes } = this.caixaDetalhe;
    let { quantidadeVendas } = totais;
    let { vendas } = totais;


    this.caixaDetalhe.tcm = this.calculaTcm(vendas, quantidadeVendas)
    this.caixaDetalhe.totais.sangrias = this.calcularSangria(movimentacoes)
    this.caixaDetalhe.totais.suprimentos = this.calcularSuprimentos(movimentacoes)
    this.caixaDetalhe.totais.valeEmitido = this.caixaDetalhe.totais.valeRefeicao + this.caixaDetalhe.totais.valeAlimentacao

  }

  calcularSangria(movimentacoes) {
    let sangria = 0
    let sangrias = [];
    sangrias = movimentacoes.filter(m => m.origem == OrigemEnum.Sangria)
    sangria = sangrias.reduce((a, b) => a + b.valor, 0)
    return sangria
  }


  calcularSuprimentos(movimentacoes) {
    let suprimento = 0
    let suprimentos = [];
    suprimentos = movimentacoes.filter(m => m.origem == OrigemEnum.Suprimento)
    suprimento = suprimentos.reduce((a, b) => a + b.valor, 0)
    return suprimento
  }

  //Volume Total de Vendas no período, ou Venda Totais (VT)
  //Número de Vendas Realizadas (V)
  // retorna TMv = VT / V
  calculaTcm(vt, v) {
    return vt != 0 && v != 0 ? vt / v : 0
  }

  abreMovimentacao(origem, movimentacoes) {
    this.origem = origem;
    this.movimentacaoDetalhe = movimentacoes;
  }

  modalFechadaMovimentacao() {
    this.emitir = new EventEmitter<any>();
    this.movimentacaoDetalhe = null;
  }


}
