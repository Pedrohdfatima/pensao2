import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuarioModel';
import { Response } from '../models/responseModel';
import { UsuarioEdicaoDto } from '../models/usuarioEdicaoDto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl = environment.UrlApi;

  constructor(private http : HttpClient) { }

  BuscarUsuarios() : Observable<Response<UsuarioModel[]>> {
      return this.http.get<Response<UsuarioModel[]>>(`${this.apiUrl}/Usuario`)
  }

  RemoverUsuarios(id: number) : Observable<Response<UsuarioModel>> {
      return this.http.delete<Response<UsuarioModel>>(`${this.apiUrl}/Usuario/${id}`)
  }

  BuscarUsuarioPorId(id: number) : Observable<Response<UsuarioModel>>    {
      return this.http.get<Response<UsuarioModel>>(`${this.apiUrl}/Usuario/${id}`)
  }

  EditarUsuario(usuario: UsuarioEdicaoDto) : Observable<Response<UsuarioModel>> {
      return this.http.put<Response<UsuarioModel>>(`${this.apiUrl}/Usuario`,usuario);
  }
}
