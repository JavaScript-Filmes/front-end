import { FilmeService } from "../../../../services/filme.service";
import { Filme } from "../../../../modelos/Filme";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

interface Situacao {
  value: string;
}

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
  diretor!: string;
  statusSelect: Situacao[] = [{ value: "DISPONÍVEL" }, { value: "LOCADO" }];
  filme = new Filme();
  id!: string;
  filmes: Filme[] = [];

  constructor(
    private service: FilmeService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.service.listarFilmes().subscribe((filmes) => {
      this.filmes = filmes;
    });
  }
  atualizaStatus(val: any): void {
    this.filme.status = val.value;
  }

  atualizar(): void {
    this.filme.titulo = this.titulo;
    this.filme.descricao = this.descricao;
    this.filme.diretor = this.diretor;
    this.filme.genero = this.genero;
    this.filme.duracao = this.duracao;

    if (
      this.id &&
      this.titulo &&
      this.descricao &&
      this.genero &&
      this.duracao
    ) {
      this.service.atualizarFilme(this.filme, this.id).subscribe((filme) => {
        console.log(filme);
      });

      this.snack.open("Filme cadastrado com sucesso", "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    } else {
      this.snack.open("Todos os dados precisam ser preenchidos", "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    }
  }
}
