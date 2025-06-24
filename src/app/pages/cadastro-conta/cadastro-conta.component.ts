import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-conta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css']
})
export class CadastroContaComponent {
  perfilForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.perfilForm = this.fb.group({
      responsavel: [''],
      nascimento: [''],
      visitas: [''],
      pagamento: ['']
    });
  }

  proximaEtapa(): void {
    console.log("SIMULANDO: Salvando dados do perfil...", this.perfilForm.value);
    this.toastr.info('Dados do perfil salvos (simulado).');
    this.router.navigate(['/cadastro-filho']);
  }
}
