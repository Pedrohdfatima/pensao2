import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
// AQUI: ReactiveFormsModule é importado
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { UsuarioCriacaoDto } from 'src/app/models/usuarioCriacaoDto';
import { Response } from 'src/app/models/responseModel';
import { UsuarioModel } from 'src/app/models/usuarioModel';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule // <-- ADICIONE ESTA LINHA
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.cadastroForm = this.fb.group({
      usuario: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmaSenha: ['', Validators.required]
    }, { validator: this.senhasCoincidem });
  }

  senhasCoincidem(group: FormGroup) {
    const senha = group.get('senha')?.value;
    const confirmaSenha = group.get('confirmaSenha')?.value;
    return senha === confirmaSenha ? null : { senhasNaoCoincidem: true };
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const novoUsuario: UsuarioCriacaoDto = this.cadastroForm.value;

      this.authService.RegistrarUsuario(novoUsuario).subscribe({
        next: (response: Response<UsuarioModel>) => {
          if(response.sucesso) {
            this.toastr.success('Cadastro realizado com sucesso!');
            this.router.navigate(['/login']);
          } else {
            this.toastr.error(response.mensagem || 'Ocorreu um erro ao tentar cadastrar.');
          }
        },
        error: (err) => {
          console.error(err);
          this.toastr.error('Erro na comunicação com o servidor. Tente novamente mais tarde.');
        }
      });
    } else {
      this.toastr.warning('Por favor, preencha o formulário corretamente.');
    }
  }
}