import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './app/components/login/login.component'; // ajuste o caminho se necessário
import { provideHttpClient } from '@angular/common/http'; // opcional, mas comum

bootstrapApplication(LoginComponent, {
  providers: [
    provideHttpClient(), // ou outros providers que você usa
  ]
});
