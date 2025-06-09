import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificacao',
  standalone: true,
  imports: [],
  templateUrl: './verificacao.component.html',
  styleUrls: ['./verificacao.component.css']
})
export class VerificacaoComponent {
  constructor(private router: Router) {}

  verificar() {
    // Lógica de verificação do código
    this.router.navigate(['/home']);
  }
}