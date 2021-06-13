import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Usuario } from './usuario';
import { OauthService } from "../../servicos/oauth.service";
import { UtilComponent } from "../../util/util.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string;
  public password:string;
  public c_password:string;
  public cadastro_ou_entrar:boolean = false;
  public message_login_error:string[];
  public message_login_success:string = "";
  public util:UtilComponent = new UtilComponent();
  constructor(
    private _router:Router,
    private oauthService: OauthService
  ) { }

  ngOnInit(): void {

  }
  public preparaCadastrar() :void {
    this.cadastro_ou_entrar ? this.cadastro_ou_entrar = false : this.cadastro_ou_entrar = true ;
  }
  public cadastrar_logar():void {
    let usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;

    switch (this.cadastro_ou_entrar) {
       case false :
         this.
           oauthService.
           realizarLogin(usuario).subscribe(
             response => {
                this.oauthService.setToken(response);
                this._router.navigate(['/sistema'])
             }, error => {
                this.message_login_error = ["Usuário ou senha incorretos"]
             }
           );
         break;
       case true :
         this.message_login_error = [];
         this.message_login_success = "";
         this.
         oauthService.
         salvar(usuario).
         subscribe(sucesso => {
           this.username = '';
           this.password = '';
           this.c_password = '';
           this.message_login_success = "Cadastro efetuado com sucesso , Realize o login";
         },
         errors => {
           this.message_login_error = errors.error.errors;
         })
         break;
     }
  }
}
