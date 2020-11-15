import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../servicos/cliente.service';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
@NgModule({
  declarations: [ClienteFormComponent, ClienteListaComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports:[
  	ClienteFormComponent,
    ClienteListaComponent
  ],
   providers: [ClienteService],
})
export class ClientesModule { }
