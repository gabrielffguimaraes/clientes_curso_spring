import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../../../servicos/servicos.service';
import { Servico } from '../servico';

@Component({
  selector: 'app-servicos-lista',
  templateUrl: './servicos-lista.component.html',
  styleUrls: ['./servicos-lista.component.css']
})
export class ServicosListaComponent implements OnInit {
  servicos: Servico[] = [];
  errors: string[];
  msg_success: boolean = false;
  id_selecionado: number;
  msg: boolean = false;
  nome: string;
  mes: number;
  meses: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12];
  mesesDescricao: string[] = [
    "Selecione ...",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ]
  constructor(private servicosService : ServicosService) { }

  ngOnInit(): void {
     this.loadServicos();
  }
  public loadServicos(): void {
      this.servicosService
      .getServicos(this.nome,(this.mes+1),"")
      .subscribe(servicos => {
        this.servicos = servicos;
      })
  }
  public pesquisar(): void{
    this.limparMsgs();
    this.servicosService
      .getServicos(this.nome,this.mes,"/pesquisar")
      .subscribe(servicos => {
        this.msg = (servicos.length <= 0)? true : false;
        this.servicos = servicos;
      })
  }
  public excluirServico(): void {
    this.limparMsgs();
    this.servicosService
      .excluir(this.id_selecionado)
      .subscribe( response => {
          this.msg_success = true;
          this.loadServicos();
      }, errors => {
          this.errors = errors.error.errors;
      })
  }
  public limparMsgs(): void {
     this.errors = [];
     this.msg_success = false;
     this.msg = false;
  }
}
