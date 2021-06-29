import { HttpClient } from "@angular/common/http";
import { Filme } from "../modelos/Filme";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FilmeService {
  private baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  listarFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${this.baseURL}`);
  }

  listarFilmeId(id: string): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${this.baseURL}catalogo/listar-filme/${id}`);
  }

  cadastrarFilme(Filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(
      `${this.baseURL}catalogo/cadastrar-filme`,
      Filme
    );
  }

  deletarFilme(id: string): Observable<Filme[]> {
    return this.http.delete<Filme[]>(
      `${this.baseURL}catalogo/excluir-filme/${id}`
    );
  }

  atualizarFilme(Filme: Filme, id: string): Observable<Filme> {
    return this.http.put<Filme>(
      `${this.baseURL}catalogo/editar-filme/${id}`,
      Filme
    );
  }
}
