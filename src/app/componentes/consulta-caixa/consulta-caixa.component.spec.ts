import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCaixaComponent } from './consulta-caixa.component';

describe('ConsultaCaixaComponent', () => {
  let component: ConsultaCaixaComponent;
  let fixture: ComponentFixture<ConsultaCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
