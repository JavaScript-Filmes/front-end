import { FilmeService } from "../../../../services/filme.service";
import { Filme } from "../../../../modelos/Filme";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

interface Situacao {
  value: string;
}

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
  titulo!: string;
  genero!: string;
  duracao!: string;
  descricao!: string;
  diretor!: string;
  statusSelect: Situacao[] = [{ value: "DISPONÍVEL" }, { value: "LOCADO" }];
  filme = new Filme();

  constructor(
    private service: FilmeService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {}

  atualizaStatus(val: any): void {
    this.filme.status = val.value;
  }

  cadastrar(): void {
    this.filme.titulo = this.titulo;
    this.filme.descricao = this.descricao;
    this.filme.diretor = this.diretor;
    this.filme.genero = this.genero;
    this.filme.duracao = this.duracao;

    if (this.titulo && this.descricao && this.genero && this.duracao) {
      this.snack.open("Filme cadastrado com sucesso", "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate(["/filme/principal"]);

      this.service.cadastrarFilme(this.filme).subscribe((filme) => {
        console.log(filme);
      });
    } else {
      this.snack.open("Todos os dados precisam ser preenchidos", "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    }
  }
}
