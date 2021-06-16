import { FavoritoService } from "../../../../services/favorito.service";
import { Favorito } from "../../../../modelos/Favorito";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-deletar",
  templateUrl: "./deletar.component.html",
  styleUrls: ["./deletar.component.css"],
})
export class DeletarFavoritoComponent implements OnInit {
  id!: string;
  favoritos: Favorito[] = [];

  constructor(private service: FavoritoService) {}

  ngOnInit(): void {}

  deletar(): void {
    let id = this.id;

    this.service.deletarFavorito(id).subscribe((favoritos) => {
      this.favoritos = favoritos;
    });
  }
}
