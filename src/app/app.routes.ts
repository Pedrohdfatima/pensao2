import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

import { EditarComponent } from './pages/editar/editar.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

// Usando o alias que você definiu para a primeira etapa do cadastro
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
    // ROTA PADRÃO: Se o usuário estiver logado, vai para Home. Senão, o authGuard redireciona para /login.
    { path: '', component: HomeComponent, canActivate: [authGuard] },

    // ROTA DE LOGIN
    { path: 'login', component: LoginComponent },

    // NOVO FLUXO DE CADASTRO EM ETAPAS
    { path: 'cadastro', component: CadastroUsuarioComponent },       // Etapa 1
    { path: 'cadastro-conta', component: CadastroContaComponent }, // Etapa 2
    { path: 'cadastro-filho', component: CadastroFilhoComponent }, // Etapa 3

    // ROTAS AUTENTICADAS (principais da aplicação)
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'detalhes/:id', component: DetalhesComponent, canActivate: [authGuard] },
    { path: 'editar/:id', component: EditarComponent, canActivate: [authGuard] },
    { path: 'calendario', component: CalendarioComponent, canActivate: [authGuard] },
    { path: 'despesas', component: DespesasComponent, canActivate: [authGuard] },
    { path: 'guia-juridico', component: GuiaJuridicoComponent, canActivate: [authGuard] },
    { path: 'guia-passeios', component: GuiaPasseiosComponent, canActivate: [authGuard] },
    { path: 'sobre-nos', component: SobreNosComponent, canActivate: [authGuard] },
    { path: 'perfil', component: PerfilComponent, canActivate: [authGuard] },
    
    // OUTRAS ROTAS (que você já tinha)
    { path: 'verificacao', component: VerificacaoComponent },

    // Rota curinga para qualquer caminho não encontrado, redireciona para a rota padrão
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
