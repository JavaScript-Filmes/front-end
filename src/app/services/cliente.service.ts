import { HttpClient } from "@angular/common/http";
import { Cliente } from "../modelos/Cliente";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  private baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseURL}catalogo/cliente`);
  }

  listarClienteId(id: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(
      `${this.baseURL}catalogo/listar-cliente/${id}`
    );
  }

  cadastrarCliente(Cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      `${this.baseURL}catalogo/cadastrar-usuario`,
      Cliente
    );
  }
}
