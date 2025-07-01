import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioCriacaoDto } from '../models/usuarioCriacaoDto';
import { UsuarioLoginDto } from '../models/usuarioLoginDto';
import { Response } from '../models/responseModel';
import { UsuarioModel } from '../models/usuarioModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private apiUrl = environment.UrlApi;

  constructor(private http: HttpClient, private router: Router) { }

  RegistrarUsuario(usuario: UsuarioCriacaoDto): Observable<Response<UsuarioModel>> {
    return this.http.post<Response<UsuarioModel>>(`${this.apiUrl}/login/register`, usuario);
  }

  LoginUsuario(usuarioLogin: UsuarioLoginDto): Observable<Response<UsuarioModel>> {
    return this.http.post<Response<UsuarioModel>>(`${this.apiUrl}/login`, usuarioLogin).pipe(
      tap(response => {
        if (response && response.dados && response.dados.token) {
          localStorage.setItem('token', response.dados.token);
        }
      })
    );
  }

  Sair(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}