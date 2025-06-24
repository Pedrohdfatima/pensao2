import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { UsuarioCriacaoDto } from '../models/usuarioCriacaoDto';
import { UsuarioLoginDto } from '../models/usuarioLoginDto';
import { Response } from '../models/responseModel';
import { UsuarioModel } from '../models/usuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  
  constructor(private router: Router) { }

  // Finge que registra um usuário e sempre retorna sucesso
  RegistrarUsuario(usuario: UsuarioCriacaoDto): Observable<Response<UsuarioModel>> {
    console.log('SIMULANDO CADASTRO (Etapa 1):', usuario);

    const usuarioFalso: UsuarioModel = {
      id: Math.floor(Math.random() * 1000),
      usuario: usuario.usuario,
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
      token: 'token-falso-gerado-no-cadastro-12345',
      dataCriacao: new Date(),
      dataAlteracao: new Date(),
      senhaHash: new Uint8Array(),
      senhaSalt: new Uint8Array()
    };
    
    const respostaFalsa: Response<UsuarioModel> = {
      dados: usuarioFalso,
      mensagem: "Etapa 1 concluída (simulado).",
      status: true
    };
    
    return of(respostaFalsa).pipe(delay(500)); // Pequeno delay para parecer real
  }

  // Finge que loga um usuário e sempre retorna sucesso
  LoginUsuario(usuarioLogin: UsuarioLoginDto): Observable<Response<UsuarioModel>> {
    console.log('SIMULANDO LOGIN:', usuarioLogin);

    const usuarioFalsoLogado: UsuarioModel = {
      id: 1,
      usuario: 'usuario_logado',
      nome: 'Usuário',
      sobrenome: 'Logado',
      email: usuarioLogin.email,
      token: 'token-falso-gerado-no-login-abcdef',
      dataCriacao: new Date(),
      dataAlteracao: new Date(),
      senhaHash: new Uint8Array(),
      senhaSalt: new Uint8Array()
    };

    const respostaFalsa: Response<UsuarioModel> = {
      dados: usuarioFalsoLogado,
      mensagem: "Login bem-sucedido (simulado).",
      status: true
    };

    return of(respostaFalsa).pipe(delay(500));
  }

  Sair(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
