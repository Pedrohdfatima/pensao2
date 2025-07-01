import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../models/responseModel';
import { UsuarioModel } from '../models/usuarioModel';
import { UsuarioEdicaoDto } from '../models/usuarioEdicaoDto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.UrlApi}/Usuario`;

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Response<UsuarioModel[]>> {
    return this.http.get<Response<UsuarioModel[]>>(this.apiUrl);
  }

  getUsuarioById(id: number): Observable<Response<UsuarioModel>> {
    return this.http.get<Response<UsuarioModel>>(`${this.apiUrl}/${id}`);
  }

  updateUsuario(id: number, usuarioEdicao: UsuarioEdicaoDto): Observable<Response<UsuarioModel>> {
    return this.http.put<Response<UsuarioModel>>(`${this.apiUrl}/editarUsuario/${id}`, usuarioEdicao);
  }

  inativarUsuario(id: number): Observable<Response<UsuarioModel>> {
    return this.http.put<Response<UsuarioModel>>(`${this.apiUrl}/inativarUsuario/${id}`, {});
  }
}