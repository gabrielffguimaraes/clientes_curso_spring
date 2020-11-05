import { Injectable } from '@angular/core';
import { Servico } from '../modulos/servicos/servico';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  apiUrl: String = environment.apiUrl;
  constructor(private http:HttpClient) { }

  public salvar (servico:Servico) : Observable<Servico> {
    return this.http.post<Servico> (`${this.apiUrl}/api/servicos`,servico);
  }
  public getServicos (nome: string,mes: number,flag: string) : Observable<any> {
    let httpParams = new HttpParams()
      .set("nome",(nome)?nome:"")
      .set("mes",(mes)?mes.toString():"");

    let url = `${this.apiUrl}/api/servicos${flag}?`+httpParams.toString();
    return this.http.get<any>(url);
  }
}
