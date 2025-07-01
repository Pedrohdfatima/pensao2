import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioCriacaoDto } from 'src/app/models/usuarioCriacaoDto';
import { UsuarioEdicaoDto } from 'src/app/models/usuarioEdicaoDto';
import { RouterLink } from '@angular/router'; // 1. IMPORTAR RouterLink

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], // 2. ADICIONAR RouterLink AQUI
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() dadosUsuario: UsuarioCriacaoDto | UsuarioEdicaoDto | null = null;
  @Input() btnAcao: string = 'Cadastrar';
  @Input() btnTitulo: string = 'Cadastrar Usuário'; // A propriedade correta é 'btnTitulo'
  @Output() onSubmit = new EventEmitter<UsuarioCriacaoDto | UsuarioEdicaoDto>();

  usuarioForm!: FormGroup;

  ngOnInit(): void {
    const id = this.dadosUsuario ? (this.dadosUsuario as UsuarioEdicaoDto).id : 0;
    this.usuarioForm = new FormGroup({
      id: new FormControl(id),
      usuario: new FormControl(this.dadosUsuario?.usuario ?? '', [Validators.required]),
      sobrenome: new FormControl(this.dadosUsuario?.sobrenome ?? '', [Validators.required]),
      email: new FormControl(this.dadosUsuario?.email ?? '', [Validators.required, Validators.email]),
      // Campos de senha são opcionais na edição
      senha: new FormControl('', this.dadosUsuario ? [] : [Validators.required]),
      confirmaSenha: new FormControl('', this.dadosUsuario ? [] : [Validators.required])
    });
  }

  submit(): void {
    // Garante que o form é válido antes de emitir
    if (this.usuarioForm.valid) {
      this.onSubmit.emit(this.usuarioForm.value);
    }
  }
}