import { FavoritoService } from "../../../../services/favorito.service";
import { ClienteService } from "../../../../services/cliente.service";
import { FilmeService } from "../../../../services/filme.service";
import { Favorito } from "../../../../modelos/Favorito";
import { Filme } from "../../../../modelos/Filme";
import { Cliente } from "../../../../modelos/Cliente";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-deletar",
  templateUrl: "./deletar.component.html",
  styleUrls: ["./deletar.component.css"],
})
export class DeletarFavoritoComponent implements OnInit {
  id!: string;
  favoritos: Favorito[] = [];
  cliente!: string;
  filme!: string;
  arrayFilmes: Filme[] = [];
  arrayClientes: Cliente[] = [];
  favorito = new Favorito();

  constructor(
    private service: FavoritoService,
    private serviceFilme: FilmeService,
    private serviceCliente: ClienteService,
    private router: Router,
    private snack: MatSnackBar
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

  deletar(): void {
    let id = this.id;
    if (id) {
      this.service.deletarFavorito(id).subscribe((favoritos) => {
        this.favoritos = favoritos;
      });

      this.snack.open("Deletado com sucesso", "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate(["/favorito/listar"]);
    } else {
      this.snack.open("Por favor, informe o id requerido", "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    }
  }
}
