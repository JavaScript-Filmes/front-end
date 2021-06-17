import { FavoritoService } from "../../../../services/favorito.service";
import { ClienteService } from "../../../../services/cliente.service";
import { FilmeService } from "../../../../services/filme.service";
import { Favorito } from "../../../../modelos/Favorito";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarFavoritoComponent implements OnInit {
  favoritos: Favorito[] = [];

  constructor(
    private service: FavoritoService,
    private serviceFilme: FilmeService,
    private serviceCliente: ClienteService
  ) {}

  ngOnInit(): void {
    this.service.listarFavorito().subscribe((favoritos) => {
      this.favoritos = favoritos;

      favoritos.map((fav, index) =>
        this.serviceFilme.listarFilmeId(fav.filme).subscribe((filmes) => {
          this.favoritos[index].filme = filmes[0].titulo;
        })
      );

      favoritos.map((fav, index) =>
        this.serviceCliente
          .listarClienteId(fav.cliente)
          .subscribe((clientes) => {
            this.favoritos[index].cliente = clientes[0].usuario;
          })
      );
    });
  }
}

//post http.post<any>("http://favalhost:3000/", objeto);
