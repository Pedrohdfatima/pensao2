import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuarioModel';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { UsuarioEdicaoDto } from 'src/app/models/usuarioEdicaoDto';
import { Response } from 'src/app/models/responseModel';
import { UsuarioCriacaoDto } from 'src/app/models/usuarioCriacaoDto';

@Component({
    selector: 'app-editar',
    standalone: true,
    templateUrl: './editar.component.html',
    styleUrls: ['./editar.component.css'],
    imports: [CommonModule, FormularioComponent]
})
export class EditarComponent implements OnInit {
  btnAcao = "Salvar";
  btnTitulo = "Editar Usuário";
  usuario?: UsuarioModel;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Corrigido para 'getUsuarioById' (camelCase)
    this.usuarioService.getUsuarioById(id).subscribe((response: Response<UsuarioModel>) => {
      if (response.dados) {
        this.usuario = response.dados;
      }
    });
  }

  // O evento pode ser de criação ou edição, mas aqui será sempre de edição
  editarUsuario(usuarioFormValue: UsuarioCriacaoDto | UsuarioEdicaoDto): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // Converte o valor do formulário para o DTO de edição
    const usuarioEditado: UsuarioEdicaoDto = {
        id: id,
        usuario: usuarioFormValue.usuario,
        sobrenome: usuarioFormValue.sobrenome,
        email: usuarioFormValue.email,
    };

    // Corrigido para 'updateUsuario' (camelCase)
    this.usuarioService.updateUsuario(id, usuarioEditado).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}