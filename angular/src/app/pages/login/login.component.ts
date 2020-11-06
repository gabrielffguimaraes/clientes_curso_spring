import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

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
  public message_login_error:string
  constructor(private _router:Router) { }

  ngOnInit(): void {

  }
  public logar() :void {
    switch(this.cadastro_ou_entrar){
      case this.cadastro_ou_entrar=false :
        this._router.navigate(['/sistema'])
        break;
      case this.cadastro_ou_entrar=true :
        console.log("cadastrar")
        break;
    }
  }
  public preparaCadastrar() :void {
    this.cadastro_ou_entrar ? this.cadastro_ou_entrar = false : this.cadastro_ou_entrar = true ;
  }
}
