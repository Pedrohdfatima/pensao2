import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

// Imports de Componentes
import { LoginComponent } from './app/components/login/login.component';
import { CadastroComponent } from './app/components/cadastro/cadastro.component';
import { NavComponent } from './app/components/nav/nav.component';
import { FooterComponent } from './app/components/footer/footer.component';

// Imports de Páginas
import { HomeComponent } from './app/pages/home/home.component';
import { PerfilComponent } from './app/pages/perfil/perfil.component';
import { CadastroContaComponent } from './app/pages/cadastro-conta/cadastro-conta.component';
import { CalendarioComponent } from './app/pages/calendario/calendario.component';
import { DespesasComponent } from './app/pages/despesas/despesas.component';

// --- Novas Páginas Importadas ---
import { GuiaJuridicoComponent } from './app/pages/guia-juridico/guia-juridico.component';
import { GuiaPasseiosComponent } from './app/pages/guia-passeios/guia-passeios.component';
import { SobreNosComponent } from './app/pages/sobre-nos/sobre-nos.component';
import { VerificacaoComponent } from './app/pages/verificacao/verificacao.component';
import { CadastroFilhoComponent } from './app/pages/cadastro-filho/cadastro-filho.component';



export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro-conta', component: CadastroContaComponent },
  { path: 'verificacao', component: VerificacaoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'despesas', component: DespesasComponent },
  { path: 'guia-juridico', component: GuiaJuridicoComponent },
  { path: 'guia-passeios', component: GuiaPasseiosComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'nav', component: NavComponent },
  { path: 'cadastro-filho', component: CadastroFilhoComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
