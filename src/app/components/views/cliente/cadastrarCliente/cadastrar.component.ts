import { ClienteService } from "../../../../services/cliente.service";
import { Cliente } from "../../../../modelos/Cliente";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarClienteComponent implements OnInit {
  usuario!: string;
  senha!: string;

  constructor(
    private service: ClienteService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let cliente = new Cliente();

    cliente.usuario = this.usuario;
    cliente.senha = this.senha;

    this.snack.open("Cliente cadastrado com sucesso", "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
    this.router.navigate(["/cliente/principal"]);

    this.service.cadastrarCliente(cliente).subscribe((cliente) => {
      console.log(cliente);
    });
  }
}
