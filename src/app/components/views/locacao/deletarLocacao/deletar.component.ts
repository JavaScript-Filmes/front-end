import { LocacaoService } from "../../../../services/locacao.service";
import { Locacao } from "../../../../modelos/Locacao";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-deletar",
  templateUrl: "./deletar.component.html",
  styleUrls: ["./deletar.component.css"],
})
export class DeletarIdLocacaoComponent implements OnInit {
  id!: string;
  locacoes: Locacao[] = [];

  constructor(private service: LocacaoService) {}

  ngOnInit(): void {}

  deletar(): void {
    let id = this.id;

    this.service.deletarLocacao(id).subscribe((locacoes) => {
      this.locacoes = locacoes;
    });
  }
}
