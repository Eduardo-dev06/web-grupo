import { Routes } from '@angular/router';
import { GrupoCadastrar } from './components/grupo/grupo-cadastrar/grupo-cadastrar';
import { GrupoListar } from './components/grupo/grupo-listar/grupo-listar';

export const routes: Routes = [
  { path: 'grupo-cadastrar', component: GrupoCadastrar },
  { path: 'grupo-listar', component: GrupoListar },
  { path: '', redirectTo: 'grupo-cadastrar', pathMatch: 'full' },
];
