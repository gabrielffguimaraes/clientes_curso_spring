import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaComponent } from './pages/sistema/sistema.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './modulos/template/home/home.component';
const routes: Routes = [
  {path : '',redirectTo:'login',pathMatch:'full'},
  {path : 'login',component:LoginComponent},
	{path : 'sistema',component:SistemaComponent,children: [
	   {path : '',redirectTo:'home',pathMatch:"full"},
	   {path : 'home',component:HomeComponent}
	]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
