import { HttpClient } from "@angular/common/http";
import { Locacao } from "../modelos/Locacao";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LocacaoService {
  private baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  listarLocacao(): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(`${this.baseURL}catalogo/locacao`);
  }

  listarLocacaoId(id: string): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(
      `${this.baseURL}catalogo/listar-locacao/${id}`
    );
  }

  cadastrarLocacao(Locacao: Locacao): Observable<Locacao> {
    return this.http.post<Locacao>(
      `${this.baseURL}catalogo/cadastrar-locacao`,
      Locacao
    );
  }

  deletarLocacao(id: string): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(
      `${this.baseURL}catalogo/excluir-locacao/${id}`
    );
  }

  atualizarLocacao(Locacao: Locacao, id: string): Observable<Locacao> {
    return this.http.post<Locacao>(
      `${this.baseURL}catalogo/editar-locacao/${id}`,
      Locacao
    );
  }
}
