import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../../../servicos/cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  public cliente: Cliente;
  public teste: string;
  public sucesso: boolean = false;
  public errors: String[];

  constructor( private _router:Router,private service:ClienteService ) { 
     this.cliente = new Cliente();
  }


  ngOnInit(): void {
     
  }

  public navigate(url):void{
     this._router.navigate([url]);
  }
  public onSubmit (){
       this.sucesso = false;
       this.errors = [];
       this.service
        .salvar(this.cliente)
        .subscribe( cliente => {
            this.sucesso = true;
            this.cliente = cliente;
        }, error => {
           this.errors = error.error.errors;       
        })
  }

}
