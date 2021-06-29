import { FilmeService } from "../../../../services/filme.service";
import { Filme } from "../../../../modelos/Filme";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-deletar",
  templateUrl: "./deletar.component.html",
  styleUrls: ["./deletar.component.css"],
})
export class DeletarIdComponent implements OnInit {
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

  deletar(): void {
    let id = this.id;

    if (this.id) {
      this.snack.open("Filme excluído com sucesso", "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);

      this.service.deletarFilme(id).subscribe((filmes) => {
        console.log(filmes);
      });
    } else {
      this.snack.open("O campo ID ser preenchido", "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    }
  }
}
