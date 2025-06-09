import { Routes } from '@angular/router';

// Assumindo que seus componentes estão em 'src/app/pages/'
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CadastroContaComponent } from './pages/cadastro-conta/cadastro-conta.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { GuiaJuridicoComponent } from './pages/guia-juridico/guia-juridico.component';
import { GuiaPasseiosComponent } from './pages/guia-passeios/guia-passeios.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { VerificacaoComponent } from './pages/verificacao/verificacao.component';
import { CadastroFilhoComponent } from './pages/cadastro-filho/cadastro-filho.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro-conta', component: CadastroContaComponent },
  { path: 'cadastro-filho', component: CadastroFilhoComponent },
  { path: 'verificacao', component: VerificacaoComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'despesas', component: DespesasComponent },
  { path: 'guia-juridico', component: GuiaJuridicoComponent },
  { path: 'guia-passeios', component: GuiaPasseiosComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // Rota para qualquer URL não encontrada
];