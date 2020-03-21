import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { OrigemEnum } from 'src/app/enums/origem-enum.enum';


@Component({
  selector: 'app-movimentacao-detalhe',
  templateUrl: './movimentacao-detalhe.component.html',
  styleUrls: ['./movimentacao-detalhe.component.scss']
})
export class MovimentacaoDetalheComponent implements OnInit {

  constructor() { }
  public caixaDetalhe = null;
  public OrigemEnum = OrigemEnum;

  @Input()
  movimentacaoDetalhe: any;
  @Input()
  origem: any;

  @Output()
  fecharModal = new EventEmitter<any>();

  fechar() {
    this.fecharModal.emit();
    $('#modalMovimentacao').css("display", "none");
  }

  ngOnInit() {
    $('#modalMovimentacao').css("display", "block");
    this.movimentacaoDetalhe = this.movimentacaoDetalhe.filter(m => m.origem == OrigemEnum.Sangria || m.origem == OrigemEnum.Suprimento)
  }

}
