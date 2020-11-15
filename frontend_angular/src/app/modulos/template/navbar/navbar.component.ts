import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { OauthService } from "../../../servicos/oauth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router,private oauthService:OauthService) { }

  ngOnInit(): void {
  }
  public navigate(url: string): void {
  	this._router.navigate([url]);
  }
}
