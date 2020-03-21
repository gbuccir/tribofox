import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoDetalheComponent } from './movimentacao-detalhe.component';

describe('MovimentacaoDetalheComponent', () => {
  let component: MovimentacaoDetalheComponent;
  let fixture: ComponentFixture<MovimentacaoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
