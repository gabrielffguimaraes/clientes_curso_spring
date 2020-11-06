import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../servicos/cliente.service';
import { ServicosService } from '../../../servicos/servicos.service';
import { Cliente } from '../../clientes/cliente';
import { Servico } from '../servico';
import { Router,ActivatedRoute } from '@angular/router';
import { UtilComponent} from '../../../util/util.component';

@Component({
  selector: 'app-servicos-form',
  templateUrl: './servicos-form.component.html',
  styleUrls: ['./servicos-form.component.css']
})
export class ServicosFormComponent implements OnInit {
  errors:string[];
  sucesso:string;
  servico: Servico;
  clientes: Cliente[] = [];
  idSelecionado: number;
  id:number;
  util:UtilComponent;
  constructor(private activateRoute:ActivatedRoute,private _router: Router,private clienteService:ClienteService,private servicosService:ServicosService) {
    this.servico = new Servico();
  }
  ngOnInit(): void {
      this.util = new UtilComponent();
      this.activateRoute
        .params
        .subscribe(params => {
          //PAREI AQUI EDITAR SERVIÇO.
          if(params['id'])
          this.id = params['id'];
          this.servicosService
            .getServicoByID(this.id)
            .subscribe(servico => {
               this.servico.descricao = servico.descricao;
               this.servico.idCliente = servico.cliente.id;
               this.servico.valor = servico.valor;
               this.servico.data = this.util.convertData(servico.dataCadastro,"yyyy-MM-dd");
            })
      })
  	  this.clienteService.getClientes()
  	  .subscribe( clientes => {
  	  	 this.clientes = clientes;
  	  })
  }

  public onSubmit(){
     this.servicosService
       .salvar(this.servico)
       .subscribe( response => {
           this.sucesso = "Sucesso ao adicionar Serviço !";
           this.servico = new Servico();
       }, errors => {
           this.errors = errors.error.errors ;
       });
  }

  public navigate(url):void{
    this._router.navigate([url]);
  }
}
