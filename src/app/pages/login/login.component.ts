import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { UsuarioLoginDto } from 'src/app/models/usuarioLoginDto';
import { Response } from 'src/app/models/responseModel';
import { UsuarioModel } from 'src/app/models/usuarioModel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const usuarioLogin: UsuarioLoginDto = this.loginForm.value;
      this.authService.LoginUsuario(usuarioLogin).subscribe({
        next: (response: Response<UsuarioModel>) => {
          if (response.sucesso) {
            this.toastr.success('Login realizado com sucesso!');
            this.router.navigate(['/home']);
          } else {
            this.toastr.error(response.mensagem || 'Ocorreu um erro ao tentar fazer login.');
          }
        },
        error: (err) => {
          console.error(err);
          this.toastr.error('Erro na comunicação com o servidor. Tente novamente mais tarde.');
        }
      });
    } else {
      this.toastr.warning('Por favor, preencha os campos corretamente.');
    }
  }
}