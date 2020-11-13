import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../pages/login/usuario";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  apiUrl : string = environment.apiUrl+environment.path_context_usuarios;
  tokenUrl : string = environment.apiUrl+environment.path_context_oauth;
  clientId : string =  environment.client_id;
  clientSecret : string = environment.client_secret;

  constructor(private http: HttpClient ) {

  }

  // @ts-ignore
  salvar(usuario: Usuario): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}`,usuario);
  }

  realizarLogin(usuario: Usuario) : Observable<any>{
    const headers = {
      'Authorization':'Basic' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type':'application/x-www.form-urlencoded'
    }
    let params:HttpParams = new HttpParams().
      set("username",usuario.username).
      set("password",usuario.password).
      set("grant_type","password");

    return this.http.post(this.tokenUrl,params.toString() , {headers})
  }
}
