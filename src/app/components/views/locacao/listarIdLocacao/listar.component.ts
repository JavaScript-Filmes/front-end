import { LocacaoService } from "../../../../services/locacao.service";
import { Locacao } from "../../../../modelos/Locacao";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarLocacaoIdComponent implements OnInit {
  locacoes: Locacao[] = [];
  id!: string;

  constructor(private service: LocacaoService) {}

  ngOnInit(): void {
    let id = this.id;

    this.service.listarLocacaoId(id).subscribe((locs) => {
      this.locacoes = locs;
    });
  }
}

//post http.post<any>("http://localhost:3000/", objeto);
