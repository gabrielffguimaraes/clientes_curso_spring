import { Injectable } from '@angular/core';
import { Servico } from '../modulos/servicos/servico';
import { HttpClient } from '@angular/common/http';
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
}
