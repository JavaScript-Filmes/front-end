import { FavoritoService } from "../../../../services/favorito.service";
import { Favorito } from "../../../../modelos/Favorito";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarFavoritoComponent implements OnInit {
  favoritos: Favorito[] = [];

  constructor(private service: FavoritoService) {}

  ngOnInit(): void {
    this.service.listarFavorito().subscribe((favoritos) => {
      this.favoritos = favoritos;
    });
  }
}

//post http.post<any>("http://localhost:3000/", objeto);
