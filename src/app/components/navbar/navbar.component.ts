import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar', // <-- CORREÇÃO: O seletor deve ser este.
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
// CORREÇÃO: O nome da classe deve ser este, seguindo a convenção.
export class NavbarComponent {

  constructor() { }

}