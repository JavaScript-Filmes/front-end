import { FavoritoService } from "../../../../services/favorito.service";
import { ClienteService } from "../../../../services/cliente.service";
import { FilmeService } from "../../../../services/filme.service";
import { Component, OnInit } from "@angular/core";
import { Favorito } from "src/app/modelos/Favorito";
import { Filme } from "../../../../modelos/Filme";
import { Cliente } from "../../../../modelos/Cliente";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarFavoritoComponent implements OnInit {
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
    this.serviceFilme.listarFilmes().subscribe((filmes) => {
      this.arrayFilmes = filmes;
    });

    this.serviceCliente.listarClientes().subscribe((clientes) => {
      this.arrayClientes = clientes;
    });
  }

  atualizaFilme(val: any): void {
    this.favorito.filme = val.value._id;
    console.log(val.value);
  }

  atualizaCliente(val: any): void {
    this.favorito.cliente = val.value._id;
    console.log(val.value);
    console.log(this.favorito.cliente);
  }

  cadastrar(): void {
    this.snack.open("Favoritado com sucesso", "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
    this.router.navigate(["/favorito/principal"]);

    this.service.cadastrarFavorito(this.favorito).subscribe((favorito) => {
      console.log(favorito);
    });
  }
}
