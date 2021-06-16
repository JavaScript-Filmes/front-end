import { HttpClient } from "@angular/common/http";
import { Favorito } from "../modelos/Favorito";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FavoritoService {
  private baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  listarFavorito(): Observable<Favorito[]> {
    return this.http.get<Favorito[]>(`${this.baseURL}catalogo/favorito`);
  }

  cadastrarFavorito(Favorito: Favorito): Observable<Favorito> {
    return this.http.post<Favorito>(
      `${this.baseURL}catalogo/cadastrar-favorito`,
      Favorito
    );
  }

  deletarFavorito(id: string): Observable<Favorito[]> {
    return this.http.get<Favorito[]>(
      `${this.baseURL}catalogo/excluir-favorito/${id}`
    );
  }
}
