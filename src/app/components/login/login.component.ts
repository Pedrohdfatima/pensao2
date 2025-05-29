import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,  // <<< Isso é obrigatório para poder importar em outro standalone component
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // sua lógica aqui
}
