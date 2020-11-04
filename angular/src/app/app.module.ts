import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { TemplateModule } from './modulos/template/template.module';
import { AppRoutingModule } from './app-routing.module';
import { ClientesModule } from './modulos/clientes/clientes.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ServicosModule } from './modulos/servicos/servicos.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    HttpClientModule,
    ServicosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
