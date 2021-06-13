import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Usuario } from './usuario';
import { OauthService } from '../../servicos/oauth.service';
import { UtilComponent } from '../../util/util.component';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public c_password: string;
  public cadastro_ou_entrar = false;
  public message_login_error: string[];
  public message_login_success = '';
  public util: UtilComponent = new UtilComponent();
  constructor(
    private _router: Router,
    private oauthService: OauthService
  ) { }

  ngOnInit(): void {

  }
  public preparaCadastrar(): void {
    this.cadastro_ou_entrar ? this.cadastro_ou_entrar = false : this.cadastro_ou_entrar = true ;
  }
  public cadastrar_logar(f): void {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.message_login_error = [];
    this.message_login_success = '';
    switch (this.cadastro_ou_entrar) {
       case false :
         this.
           oauthService.
           realizarLogin(usuario).subscribe(
             response => {
                this.oauthService.setToken(response);
                this._router.navigate(['/sistema']);
             }, error => {
                this.message_login_error = ['Usuário ou senha incorretos'];
             }
           );
         break;
       case true :
         if (this.aplicaError(f)) {
           return ;
         }
         this.
         oauthService.
         salvar(usuario).
         subscribe(sucesso => {
           f.form.reset();
           this.message_login_success = 'Cadastro efetuado com sucesso , Realize o login';
         },
         errors => {
           this.message_login_error = errors.error.errors;
         });
         break;
     }
  }
  public aplicaError(f: any): boolean {
     const bool = (
       this.cadastro_ou_entrar &&
       this.password !== this.c_password &&
       (f.form.controls.password.touched && f.form.controls.c_password.touched)
     );
     return bool;
  }
}
