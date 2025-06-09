import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // 1. Importe o Router

@Component({
  selector: 'app-cadastro-filho',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cadastro-filho.component.html',
  styleUrls: ['./cadastro-filho.component.css']
})
export class CadastroFilhoComponent {

  // 2. Injete o Router no construtor
  constructor(private router: Router) { }

  /**
   * 3. Crie a função para salvar os dados e navegar para a home.
   */
  salvarEIrParaHome(): void {
    // Aqui, futuramente, você adicionaria a lógica para salvar
    // os dados do filho no banco de dados.

    // Após salvar, navega para a página inicial.
    console.log('Navegando para a home...');
    this.router.navigate(['/home']);
  }
}