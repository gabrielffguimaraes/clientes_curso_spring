import { Injectable } from '@angular/core';
import { Cliente } from '../modulos/clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiUrl: String = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public salvar(cliente : Cliente) : Observable<Cliente>{
      return this.http.post<Cliente> (`${this.apiUrl}/api/clientes`,cliente);
  }

  public getClientes() : Observable<Cliente[]>{
  	 return this.http.get<Cliente[]>(`${this.apiUrl}/api/clientes`)
  }

  public getClienteById(id) : Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrl}/api/clientes/${id}`);
  }

  public editar(cliente:Cliente) : Observable<Cliente>{
     return this.http.put<Cliente>(`${this.apiUrl}/api/clientes/${cliente.id}`,cliente);
  }

  public excluir(cliente:Cliente) : Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.apiUrl}/api/clientes/${cliente.id}`);
  }
}
