import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/components/login/login.component';
import { CadastroComponent } from './app/components/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
