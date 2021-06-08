import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../../../servicos/cliente.service';
import { Router} from '@angular/router';
import $ from 'jquery';
@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  mensagemErro: string;
  mensagemSucesso: string;
  clienteSelecionado: Cliente;
  clientes: Cliente[] = [];
  constructor(private _router:Router,
              private service: ClienteService) { }
  ngOnInit(): void {
    this.listar();
  }
  public listar(): void{
    this.service
      .getClientes()
      .subscribe( clientes =>{
        this.clientes = clientes;
      })
  }
  public excluirCliente(): void{
     this.service.excluir(this.clienteSelecionado)
       .subscribe(response => {
           this.mensagemSucesso = "Usuário excluido com Sucesso !";
           this.listar();
       }, errors => {
            this.mensagemErro = "Ocorreu um erro , por favor tente novamente  !";
       })
  }
  public navigate(url):void {
    this._router.navigate([url]);
  }
}
