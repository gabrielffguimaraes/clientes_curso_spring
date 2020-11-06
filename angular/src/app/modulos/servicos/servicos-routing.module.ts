import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosListaComponent } from './servicos-lista/servicos-lista.component';
import { ServicosFormComponent } from './servicos-form/servicos-form.component';
import {SistemaComponent} from '../../pages/sistema/sistema.component';
const routes: Routes = [
  {path : 'sistema',component:SistemaComponent,children: [
      { path: 'servicos',component: ServicosListaComponent},
      { path: 'servicos/form',component: ServicosFormComponent},
      { path: 'servicos/form/:id',component: ServicosFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
