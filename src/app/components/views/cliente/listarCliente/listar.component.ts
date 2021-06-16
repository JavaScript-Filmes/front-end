import { ClienteService } from "../../../../services/cliente.service";
import { Cliente } from "../../../../modelos/Cliente";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarClienteComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private service: ClienteService) {}

  ngOnInit(): void {
    this.service.listarClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }
}

//post http.post<any>("http://localhost:3000/", objeto);
