import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-filho',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cadastro-filho.component.html',
  styleUrls: ['./cadastro-filho.component.css']
})
export class CadastroFilhoComponent {
  filhoForm: FormGroup;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.filhoForm = this.fb.group({
      nome: [''],
      nascimento: [''],
      genero: [''],
      escola: [''],
      saude: ['']
    });
  }

  finalizarCadastro(): void {
    console.log("SIMULANDO: Salvando dados do filho...", this.filhoForm.value);
    this.toastr.success('Cadastro concluído com sucesso! Você já pode fazer o login.');
    this.router.navigate(['/login']);
  }
}
