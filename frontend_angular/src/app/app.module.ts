import { AppComponent } from './app.component';
import { HomeComponent } from './modulos/template/home/home.component';

import { TemplateModule } from './modulos/template/template.module';
import { AppRoutingModule } from './app-routing.module';
import { ClientesModule } from './modulos/clientes/clientes.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { ServicosModule } from './modulos/servicos/servicos.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { SistemaComponent } from './pages/sistema/sistema.component';
import { UtilComponent } from './util/util.component';
import { OauthService } from "./servicos/oauth.service";

import { TokenInterceptor } from "./token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SistemaComponent,
    UtilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicosModule,
  ],
  providers: [
    OauthService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
