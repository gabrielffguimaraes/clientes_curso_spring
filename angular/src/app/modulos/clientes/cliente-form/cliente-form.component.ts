import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../../../servicos/cliente.service';
import { ActivatedRoute,Router } from '@angular/router';
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
  public id: number;
  constructor( private activatedRoute:ActivatedRoute,private _router:Router,private service:ClienteService ) {
     this.cliente = new Cliente();
  }
  ngOnInit(): void {
    let params = this.activatedRoute.params;
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id)
        this.service.getClienteById(this.id)
        .subscribe(cliente => {
         this.cliente = cliente;
        }, errors => {
         this.cliente = new Cliente();
        })
    })
  }

  public navigate(url):void{
     this._router.navigate([url]);
  }
  public onSubmit (){
    this.sucesso = false;
    this.errors = [];
    if(this.id){
        this.service
        .editar(this.cliente)
        .subscribe(cliente => {
            this.sucesso = true;
        }, error => {
            this.errors = error.error.errors;
        })
    }else {
        this.service
        .salvar(this.cliente)
        .subscribe(cliente => {
            this.sucesso = true;
            this.cliente = cliente;
        }, error => {
            this.errors = error.error.errors;
        })
    }
  }

}
