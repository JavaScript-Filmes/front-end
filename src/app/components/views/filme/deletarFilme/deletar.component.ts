import { FilmeService } from "../../../../services/filme.service";
import { Filme } from "../../../../modelos/Filme";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-deletar",
  templateUrl: "./deletar.component.html",
  styleUrls: ["./deletar.component.css"],
})
export class DeletarIdComponent implements OnInit {
  id!: string;
  filmes: Filme[] = [];

  constructor(private service: FilmeService) {}

  ngOnInit(): void {
    this.service.listarFilmes().subscribe((filmes) => {
      this.filmes = filmes;
    });
  }

  deletar(): void {
    let id = this.id;

    this.service.deletarFilme(id).subscribe((filmes) => {
      console.log(filmes);
    });
  }
}
