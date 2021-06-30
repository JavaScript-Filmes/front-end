import { LocacaoService } from "../../../../services/locacao.service";
import { ClienteService } from "../../../../services/cliente.service";
import { FilmeService } from "../../../../services/filme.service";
import { Locacao } from "../../../../modelos/Locacao";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-deletar",
  templateUrl: "./deletar.component.html",
  styleUrls: ["./deletar.component.css"],
})
export class DeletarIdLocacaoComponent implements OnInit {
  id!: string;
  locacoes: Locacao[] = [];

  constructor(
    private service: LocacaoService,
    private serviceFilme: FilmeService,
    private serviceCliente: ClienteService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.service.listarLocacao().subscribe((locs) => {
      this.locacoes = locs;

      locs.map((loc, index) =>
        this.serviceFilme.listarFilmeId(loc.filme).subscribe((filmes) => {
          this.locacoes[index].filme = filmes[0].titulo;
        })
      );

      locs.map((loc, index) =>
        this.serviceCliente
          .listarClienteId(loc.cliente)
          .subscribe((clientes) => {
            this.locacoes[index].cliente = clientes[0].usuario;
          })
      );
    });
  }

  deletar(): void {
    let id = this.id;
    if (id) {
      this.service.deletarLocacao(id).subscribe((locacoes) => {
        this.locacoes = locacoes;
      });

      this.snack.open("Deletado com sucesso", "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    } else {
      this.snack.open("Por favor, informe o id requerido", "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    }
  }
}
