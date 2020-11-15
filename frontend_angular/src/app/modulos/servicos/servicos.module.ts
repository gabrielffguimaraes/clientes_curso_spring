import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosFormComponent } from './servicos-form/servicos-form.component';
import { ServicosListaComponent } from './servicos-lista/servicos-lista.component';
import { ServicosService} from "../../servicos/servicos.service";

@NgModule({
  declarations: [
    ServicosFormComponent,
    ServicosListaComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  	ServicosFormComponent ,
  	ServicosListaComponent
  ],
  providers: [
    ServicosService
  ]
})
export class ServicosModule {}
