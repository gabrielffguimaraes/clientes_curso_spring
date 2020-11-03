import { Injectable } from '@angular/core';
import { Cliente } from '../modulos/clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public salvar(cliente : Cliente) : Observable<Cliente>{
  	 return this.http.post<Cliente> ('http://localhost:8080/clientes/api/clientes',cliente);
  }

  public getClientes() : Observable<Cliente[]>{
  	 return this.http.get<Cliente[]>('http://localhost:8080/clientes/api/clientes')
  }

  public getClienteById(id) : Observable<Cliente>{
    return this.http.get<Cliente>(`http://localhost:8080/clientes/api/clientes/${id}`);
  }

  public editar(cliente:Cliente) : Observable<Cliente>{
     return this.http.put<Cliente>(`http://localhost:8080/clientes/api/clientes/${cliente.id}`,cliente);
  }

  public excluir(cliente:Cliente) : Observable<Cliente>{
    return this.http.delete<Cliente>(`http://localhost:8080/clientes/api/clientes/${cliente.id}`);
  }
}
