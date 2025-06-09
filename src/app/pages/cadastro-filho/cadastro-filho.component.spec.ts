import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFilhoComponent } from './cadastro-filho.component';

describe('CadastroFilhoComponent', () => {
  let component: CadastroFilhoComponent;
  let fixture: ComponentFixture<CadastroFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroFilhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
