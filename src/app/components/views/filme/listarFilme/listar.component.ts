import { FilmeService } from "../../../../services/filme.service";
import { Filme } from "../../../../modelos/Filme";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {
  filmes: Filme[] = [];

  constructor(private service: FilmeService) {}

  ngOnInit(): void {
    this.service.listarFilmes().subscribe((filmes) => {
      this.filmes = filmes;
    });
  }
}

//post http.post<any>("http://localhost:3000/", objeto);
