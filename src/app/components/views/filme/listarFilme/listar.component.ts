import { FilmeService } from "../../../../services/filme.service";
import { Filme } from "../../../../modelos/Filme";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {
  filmes!: MatTableDataSource<Filme>;
  displayedColumns: string[] = [
    "titulo",
    "descricao",
    "duracao",
    "genero",
    "status",
  ];

  constructor(private service: FilmeService) {}

  ngOnInit(): void {
    this.service.listarFilmes().subscribe((filmes) => {
      this.filmes = new MatTableDataSource<Filme>(filmes);
    });
  }
}

//post http.post<any>("http://localhost:3000/", objeto);
