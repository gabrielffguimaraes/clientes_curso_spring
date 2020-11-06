import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import {SistemaComponent} from '../../pages/sistema/sistema.component';

const routes: Routes = [
  {path : 'sistema',component:SistemaComponent,children: [
      {path: 'clientes/form' , component: ClienteFormComponent},
      {path: 'clientes/form/:id' , component: ClienteFormComponent},
      {path: 'clientes' , component: ClienteListaComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
