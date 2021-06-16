import { FilmeService } from "../../../../services/filme.service";
import { Filme } from "../../../../modelos/Filme";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarIdComponent implements OnInit {
  id!: string;
  filmes: Filme[] = [];

  constructor(private service: FilmeService) {}

  ngOnInit(): void {
    let id = this.id;

    this.service.listarFilmeId(id).subscribe((filmes) => {
      this.filmes = filmes;
    });
  }
}

//post http.post<any>("http://localhost:3000/", objeto);
