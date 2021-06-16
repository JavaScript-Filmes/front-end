import { ClienteService } from "../../../../services/cliente.service";
import { Cliente } from "../../../../modelos/Cliente";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarClienteComponent implements OnInit {
  usuario!: string;
  senha!: string;

  constructor(private service: ClienteService) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let cliente = new Cliente();

    cliente.usuario = this.usuario;
    cliente.senha = this.senha;

    this.service.cadastrarCliente(cliente).subscribe((cliente) => {
      console.log(cliente);
    });
  }
}
