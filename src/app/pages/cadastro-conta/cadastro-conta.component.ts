import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // 1. Importe o Router

@Component({
  selector: 'app-cadastro-conta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css']
})
export class CadastroContaComponent {

  // 2. Injete o Router
  constructor(private router: Router) { }

  // 3. Crie a função de navegação
  irParaCadastroFilho(): void {
    // Lógica para salvar os dados da conta viria aqui.
    // Após o sucesso, navega.
    this.router.navigate(['/cadastro-filho']);
  }
}