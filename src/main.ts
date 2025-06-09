import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// REMOVA qualquer linha que tente importar 'NavComponent' ou 'NavbarComponent' daqui.

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
    // Nenhum outro provedor necessário por enquanto
  ]
}).catch(err => console.error(err));