import { Injectable } from '@angular/core';
import { OauthService} from "./servicos/oauth.service";
import { environment } from "../environments/environment";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  apiUrl : String = environment.apiUrl;
  pathContextUsuarios : String = environment.path_context_usuarios;
  pathContextOauth : String = environment.path_context_oauth;
  clientId : string =  environment.client_id;
  clientSecret : string = environment.client_secret;
  constructor(private oauthService:OauthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let headers = {};

    // CASO SEJA REQUISIÇÃO DE PEGAR O TOKEN DEFINIR HEADER BASIC  SE NAO DEFINIR BEARER
    if(request.url == `${this.apiUrl}${this.pathContextOauth}` ){
        headers = {
          'Authorization':'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
          'Content-Type':'application/x-www-form-urlencoded'
        }
    } else {
        headers = {
          "Authorization": `Bearer ${this.oauthService.getToken()}`
        }
    }

    if(
      request.url != `${this.apiUrl}${this.pathContextUsuarios}`
    ) {
      request = request.clone({
        setHeaders: headers
      })
    }

    return next.handle(request);
  }
}
