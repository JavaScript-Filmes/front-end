import { FavoritoService } from "../../../../services/favorito.service";
import { Component, OnInit } from "@angular/core";
import { Favorito } from "src/app/modelos/Favorito";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarFavoritoComponent implements OnInit {
  cliente!: string;
  filme!: string;

  constructor(private service: FavoritoService) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let favorito = new Favorito();

    favorito.filme = this.filme;
    favorito.cliente = this.cliente;

    this.service.cadastrarFavorito(favorito).subscribe((favorito) => {
      console.log(favorito);
    });
  }
}
