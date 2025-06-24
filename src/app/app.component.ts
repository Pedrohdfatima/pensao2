import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Importe sua Navbar e seu Footer aqui
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Adicione os componentes ao array de imports
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Se você tiver um app.component.css
})
export class AppComponent {
  title = 'webGuardians';
  
  // Esta variável vai controlar a visibilidade do layout principal
  showLayout: boolean = false;

  constructor(private router: Router) {
    // Escutamos as mudanças de rota
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Se a URL for de login ou cadastro, NÃO mostramos a navbar/footer
      if (event.url === '/login' || event.url.startsWith('/cadastro')) {
        this.showLayout = false;
      } else {
        // Para todas as outras páginas, mostramos
        this.showLayout = true;
      }
    });
  }
}
