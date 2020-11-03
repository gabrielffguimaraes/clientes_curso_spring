import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';

const routes: Routes = [
	{path: 'clientes-form' , component:ClienteFormComponent},
	{path: 'clientes' , component:ClienteListaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
