import { LocacaoService } from "../../../../services/locacao.service";
import { ClienteService } from "../../../../services/cliente.service";
import { FilmeService } from "../../../../services/filme.service";
import { Locacao } from "../../../../modelos/Locacao";
import { Filme } from "../../../../modelos/Filme";
import { Cliente } from "../../../../modelos/Cliente";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-atualizar",
  templateUrl: "./atualizar.component.html",
  styleUrls: ["./atualizar.component.css"],
})
export class AtualizarLocacaoComponent implements OnInit {
  cliente!: string;
  filme!: string;
  id!: string;
  locacoes: Locacao[] = [];
  arrayFilmes: Filme[] = [];
  arrayClientes: Cliente[] = [];
  locacao = new Locacao();

  constructor(
    private service: LocacaoService,
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

  atualizaFilme(val: any): void {
    this.locacao.filme = val.value._id;
  }

  atualizaCliente(val: any): void {
    this.locacao.cliente = val.value._id;
  }

  atualizar(): void {
    let locacao = new Locacao();

    locacao.cliente = this.cliente;
    locacao.filme = this.filme;

    if (this.id && this.locacao.filme && this.locacao.cliente) {
      this.service
        .atualizarLocacao(this.locacao, this.id)
        .subscribe((locacao) => {
          console.log(locacao);
        });

      this.snack.open("Locação atualizada com sucesso", "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate(["/locacao/listar"]);
    } else {
      this.snack.open("Todos os dados precisam ser preenchidos", "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    }
  }
}
