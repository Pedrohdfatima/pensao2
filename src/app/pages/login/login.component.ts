import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AutenticacaoService } from '../../services/autenticacao.service';
import { UsuarioLoginDto } from '../../models/usuarioLoginDto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  fazerLogin(): void {
    if (this.loginForm.invalid) {
      this.toastr.error('Por favor, preencha os campos corretamente.', 'Erro de Validação');
      return;
    }

    console.log('1. Botão de login clicado. Chamando o serviço de autenticação simulado...');
    const usuarioLogin: UsuarioLoginDto = this.loginForm.value;

    this.autenticacaoService.LoginUsuario(usuarioLogin).subscribe({
      next: (response) => {
        console.log('2. Serviço simulado respondeu com:', response);

        // Verificação super segura para garantir que o token existe
        if (response && response.dados && response.dados.token) {
          console.log('3. Resposta válida! O token é:', response.dados.token);
          
          localStorage.setItem('token', response.dados.token);
          console.log('4. TOKEN SALVO! Verifique no DevTools (Application > Local Storage).');

          this.toastr.success('Login efetuado com sucesso!');
          
          console.log('5. Navegando para a /home...');
          this.router.navigate(['/home']);

        } else {
          console.error('ERRO GRAVE: A resposta da simulação veio sem o token. Verifique o autenticacao.service.ts');
          this.toastr.error('A resposta da simulação é inválida.');
        }
      },
      error: (err) => {
        // Este bloco não deve ser executado com nosso serviço simulado
        console.error('ERRO INESPERADO: O serviço simulado retornou um erro.', err);
      }
    });
  }
}
