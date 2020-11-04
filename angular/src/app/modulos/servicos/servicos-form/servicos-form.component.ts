import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../servicos/cliente.service';
import { Cliente } from '../../clientes/cliente';
import { Servico } from '../servico';
@Component({
  selector: 'app-servicos-form',
  templateUrl: './servicos-form.component.html',
  styleUrls: ['./servicos-form.component.css']
})
export class ServicosFormComponent implements OnInit {
  
  servico: Servico;
  clientes: Cliente[] = [];
  idSelecionado: number;
  constructor(private clienteService:ClienteService) {
    this.servico = new Servico();
  }

  ngOnInit(): void {
    
  	  this.clienteService.getClientes()
  	  .subscribe( clientes => {
  	  	 this.clientes = clientes;
  	  	 console.log(this.clientes)
  	  })
  }

  public onSubmit(){
    console.log(this.servico);
  }
  public setCliente(el):any{
    console.log(el);
  }
}
