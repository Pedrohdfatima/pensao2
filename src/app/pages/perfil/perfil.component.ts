import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  constructor() { }

  alterarEmail() {
    alert('Funcionalidade "Alterar e-mail" a ser implementada.');
  }

  alterarSenha() {
    alert('Funcionalidade "Alterar senha" a ser implementada.');
  }

}