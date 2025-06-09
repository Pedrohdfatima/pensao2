import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // 1. Importe o Router

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  // 2. Injete o Router no construtor
  constructor(private router: Router) { }

  // 3. Crie a função para navegar
  irParaCadastroConta(): void {
    // Lógica de cadastro (salvar e-mail/senha) viria aqui.
    // Após o sucesso, navega para a próxima página.
    this.router.navigate(['/cadastro-conta']);
  }
}