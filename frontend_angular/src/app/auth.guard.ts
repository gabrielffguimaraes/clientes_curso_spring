import { Injectable } from '@angular/core';
import { CanActivate , Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { OauthService } from "./servicos/oauth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private oauthService : OauthService , private _route:Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const valid = this.oauthService.isAuthenticated();
    if(valid){
      return true;
    } else {
      this._route.navigate(["/login"])
    }
    return false;
  }
}
