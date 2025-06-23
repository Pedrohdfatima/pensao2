import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private autenticacaoService: AutenticacaoService,
        private formBuilder: FormBuilder,
        private router: Router,
        private toastr: ToastrService
  ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]]
    })
  }

  login(){

    if (this.loginForm.valid){
        this.autenticacaoService.LoginUsuario(this.loginForm.value).subscribe(response => {

            if(response.dados != null){
              localStorage.setItem('token', response.dados.token);

              this.toastr.success(response.mensagem, 'Sucesso!')
              this.router.navigate(['/'])

            }else{
              this.toastr.error(response.mensagem, 'Erro!')
            }
        })

    }
    else{
        this.loginForm.markAllAsTouched();
    }

    
  }


}
