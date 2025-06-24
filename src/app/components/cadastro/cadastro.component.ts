import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AutenticacaoService } from '../../services/autenticacao.service';
import { UsuarioCriacaoDto } from '../../models/usuarioCriacaoDto';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  
  cadastroForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private autenticacaoService: AutenticacaoService,
    private toastr: ToastrService
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      usuario: [''], 
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmaSenha: ['', Validators.required]
    }, { validator: this.senhasCoincidem });
  }

  registrar(): void {
    if (this.cadastroForm.invalid) {
      this.toastr.error('Por favor, preencha todos os campos corretamente.', 'Formulário Inválido');
      this.cadastroForm.markAllAsTouched();
      return;
    }

    const nomeDoPai = this.cadastroForm.get('nome')?.value;
    const usuarioParaRegistrar: UsuarioCriacaoDto = {
      ...this.cadastroForm.value,
      usuario: nomeDoPai 
    };

    this.autenticacaoService.RegistrarUsuario(usuarioParaRegistrar).subscribe({
      next: (response) => {
        if (response && response.status === true) {
          this.toastr.success('Primeira etapa concluída! Agora, mais alguns detalhes.');
          this.router.navigate(['/cadastro-conta']);
        }
      }
    });
  }

  senhasCoincidem(control: AbstractControl) {
    const senha = control.get('senha')?.value;
    const confirmaSenha = control.get('confirmaSenha')?.value;
    return senha === confirmaSenha ? null : { senhasNaoCoincidem: true };
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.cadastroForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}
