import { LocacaoService } from "../../../../services/locacao.service";
import { Locacao } from "../../../../modelos/Locacao";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-atualizar",
  templateUrl: "./atualizar.component.html",
  styleUrls: ["./atualizar.component.css"],
})
export class AtualizarLocacaoComponent implements OnInit {
  cliente!: string;
  filme!: string;
  id!: string;

  constructor(private service: LocacaoService) {}

  ngOnInit(): void {}

  atualizar(): void {
    let locacao = new Locacao();
    let id = this.id;

    locacao.cliente = this.cliente;
    locacao.filme = this.filme;

    this.service.atualizarLocacao(locacao, id).subscribe((locacao) => {
      console.log(locacao);
    });
  }
}
