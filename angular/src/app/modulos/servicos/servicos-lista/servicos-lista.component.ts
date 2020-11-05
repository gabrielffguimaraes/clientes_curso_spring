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
  msg: boolean = false;
  nome: string;
  mes: number;
  meses: number[] = [0,1,2,3,4,5,6,7,8,9,10,11];
  mesesDescricao: string[] = [
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
    this.servicosService
      .getServicos(this.nome,(this.mes+1),"")
      .subscribe(servicos => {
        this.servicos = servicos;
      })
  }
  public pesquisar(): void{
    this.msg = false;
    this.servicosService
      .getServicos(this.nome,(this.mes+1),"/pesquisar")
      .subscribe(servicos => {
        this.msg = (servicos.length <= 0)? true : false;
        this.servicos = servicos;
      })
  }
}
