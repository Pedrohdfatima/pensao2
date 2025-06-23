import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { CadastroComponent as CadastroUsuarioComponent } from './components/cadastro/cadastro.component';
import { CadastroContaComponent } from './pages/cadastro-conta/cadastro-conta.component';
import { CadastroFilhoComponent } from './pages/cadastro-filho/cadastro-filho.component';
import { VerificacaoComponent } from './pages/verificacao/verificacao.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { GuiaJuridicoComponent } from './pages/guia-juridico/guia-juridico.component';
import { GuiaPasseiosComponent } from './pages/guia-passeios/guia-passeios.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, canActivate: [authGuard]},
    {path: 'detalhes/:id', component: DetalhesComponent, canActivate: [authGuard]},
    {path: 'cadastrar-usuario', component: CadastrarComponent}, // Rota antiga de cadastro
    {path: 'editar/:id', component: EditarComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroUsuarioComponent },
    {path: 'cadastro-conta', component: CadastroContaComponent },
    {path: 'cadastro-filho', component: CadastroFilhoComponent },
    {path: 'verificacao', component: VerificacaoComponent },
    {path: 'calendario', component: CalendarioComponent, canActivate: [authGuard] },
    {path: 'despesas', component: DespesasComponent, canActivate: [authGuard] },
    {path: 'guia-juridico', component: GuiaJuridicoComponent, canActivate: [authGuard] },
    {path: 'guia-passeios', component: GuiaPasseiosComponent, canActivate: [authGuard] },
    {path: 'sobre-nos', component: SobreNosComponent, canActivate: [authGuard] },
    {path: 'perfil', component: PerfilComponent, canActivate: [authGuard] }
];