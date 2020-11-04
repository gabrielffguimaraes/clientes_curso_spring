import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosFormComponent } from './servicos-form/servicos-form.component';
import { ServicosListaComponent } from './servicos-lista/servicos-lista.component';


@NgModule({
  declarations: [
    ServicosFormComponent,
    ServicosListaComponent
  ],
  imports: [ 
    CommonModule,
    ServicosRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [
  	ServicosFormComponent ,
  	ServicosListaComponent
  ]
})
export class ServicosModule {}
