import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- IMPORTANTE

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule], // <-- AQUI
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {}
