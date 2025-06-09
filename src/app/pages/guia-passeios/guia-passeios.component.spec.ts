import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaPasseiosComponent } from './guia-passeios.component';

describe('GuiaPasseiosComponent', () => {
  let component: GuiaPasseiosComponent;
  let fixture: ComponentFixture<GuiaPasseiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiaPasseiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiaPasseiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
