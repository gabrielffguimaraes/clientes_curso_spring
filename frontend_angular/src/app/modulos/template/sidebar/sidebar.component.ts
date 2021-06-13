import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/servicos/oauth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  usuarioLogado: string;
  constructor(private _router:Router,private oauthService:OauthService) { }

  ngOnInit(): void {
    this.usuarioLogado = this.oauthService.getUserLogged();
  }

  public navigate(url):void {
  	this._router.navigate([url]);
  }
}
