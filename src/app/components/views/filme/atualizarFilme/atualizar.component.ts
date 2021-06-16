import { FilmeService } from "../../../../services/filme.service";
import { Filme } from "../../../../modelos/Filme";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-atualizar",
  templateUrl: "./atualizar.component.html",
  styleUrls: ["./atualizar.component.css"],
})
export class AtualizarComponent implements OnInit {
  titulo!: string;
  genero!: string;
  duracao!: string;
  descricao!: string;
  status!: string;
  diretor!: string;
  id!: string;

  constructor(private service: FilmeService) {}

  ngOnInit(): void {}

  atualizar(): void {
    let filme = new Filme();
    let id = this.id;

    filme.titulo = this.titulo;
    filme.descricao = this.descricao;
    filme.diretor = this.diretor;
    filme.status = this.status;
    filme.genero = this.genero;
    filme.duracao = this.duracao;

    this.service.atualizarFilme(filme, id).subscribe((filme) => {
      console.log(filme);
    });
  }
}
