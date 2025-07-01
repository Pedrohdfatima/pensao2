import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuarioModel';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Response } from 'src/app/models/responseModel';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  usuario?: UsuarioModel;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
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
}