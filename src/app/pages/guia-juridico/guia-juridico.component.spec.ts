import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaJuridicoComponent } from './guia-juridico.component';

describe('GuiaJuridicoComponent', () => {
  let component: GuiaJuridicoComponent;
  let fixture: ComponentFixture<GuiaJuridicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiaJuridicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiaJuridicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
