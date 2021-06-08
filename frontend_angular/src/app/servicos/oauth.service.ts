import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../pages/login/usuario";
import { environment } from "../../environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class OauthService {
  apiUrl : string = environment.apiUrl+environment.path_context_usuarios;
  tokenUrl : string = environment.apiUrl+environment.path_context_oauth;
  jwtHelper : JwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient , private _route:Router ) {

  }
  setToken(token:any) : void {
    localStorage.setItem("access_token",btoa(JSON.stringify(token)))
  }
  getToken(): string {
    if( localStorage.getItem("access_token") ) {
      return JSON.parse(atob(localStorage.getItem("access_token"))).access_token;
    }
    return null;
  }
  getUserLogged() :any {
    const token:any = this.getToken();
    if (token) {
      const usuario = this.jwtHelper.decodeToken(token).user_name;
      return usuario;
    }
    return null;
  }
  isAuthenticated () : boolean {
    const token = this.getToken();
    if(token){
      // @ts-ignore
      const expired: boolean = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }
  // @ts-ignore
  salvar(usuario: Usuario): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}`,usuario);
  }

  realizarLogin(usuario: Usuario) : Observable<any>{
    let params:HttpParams = new HttpParams().
      set("username",usuario.username).
      set("password",usuario.password).
      set("grant_type","password");

    return this.http.post(this.tokenUrl,params.toString())
  }
  deslogar():void{
    localStorage.removeItem('access_token');
    this._route.navigate(["/login"]);
  }
}
