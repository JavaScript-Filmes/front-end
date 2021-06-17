import { LocacaoService } from "../../../../services/locacao.service";
import { ClienteService } from "../../../../services/cliente.service";
import { FilmeService } from "../../../../services/filme.service";
import { Locacao } from "../../../../modelos/Locacao";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarLocacaoComponent implements OnInit {
  locacoes: Locacao[] = [];

  constructor(
    private service: LocacaoService,
    private serviceFilme: FilmeService,
    private serviceCliente: ClienteService
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
}

//post http.post<any>("http://localhost:3000/", objeto);
