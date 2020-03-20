import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import DesafioCaixas from '../../../../assets/DesafioCaixas.json';
import { StatusCaixaEnum } from 'src/app/enums/status-caixa-enum.enum';
import * as $ from 'jquery';

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

  @Output()
  fecharModal = new EventEmitter<any>();

  fechar() {
    this.fecharModal.emit();
    $('#myModal').css("display", "none");
  }

  ngOnInit() {
    $('#myModal').css("display", "block");
    console.log(this.caixaSelecionado)
    this.encontrarDetalheporId()
  }


  encontrarDetalheporId() {
    const { caixas_detalhes } = DesafioCaixas;
    console.log(caixas_detalhes)

    this.caixaDetalhe = caixas_detalhes.filter(c => c.caixa.id == this.caixaSelecionado)[0].caixa;
    if (this.caixaDetalhe.usuarioFechamento == null || this.caixaDetalhe.usuarioFechamento == 'undefined') {
      this.caixaDetalhe.dataFechamentoNull = "--:--"
    }

    let { totais } = this.caixaDetalhe;
    let { quantidadeVendas } = totais;
    let { vendas } = totais;

    this.caixaDetalhe.tcm = this.calculaTcm(vendas, quantidadeVendas)

    console.log(this.caixaDetalhe)
  }

  //Volume Total de Vendas no período, ou Venda Totais (VT)
  //Número de Vendas Realizadas (V)
  // retorna TMv = VT / V
  calculaTcm(vt, v) {
    return vt != 0 && v != 0 ? vt / v : 0
  }

  abreMovimentacao(origem, movimentacoes) {
    console.log(origem)
    console.log(movimentacoes)

  }


}
