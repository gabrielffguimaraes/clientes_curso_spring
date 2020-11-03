import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'; 
import { ClienteService } from '../../../servicos/cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes: Cliente[] = [];
  constructor(private _router:Router,private service: ClienteService) { }

  ngOnInit(): void {
  	  this.service
  	  .getClientes()
  	  .subscribe( clientes =>{
  	  	this.clientes = clientes;
  	  })
  }

  public navigate(url):void {
    this._router.navigate([url]);
  }
}
