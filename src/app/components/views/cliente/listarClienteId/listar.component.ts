import { ClienteService } from "../../../../services/cliente.service";
import { Cliente } from "../../../../modelos/Cliente";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarClienteIdComponent implements OnInit {
  clientes: Cliente[] = [];
  id!: string;

  constructor(private service: ClienteService) {}

  ngOnInit(): void {
    let id = this.id;

    this.service.listarClienteId(id).subscribe((clientes) => {
      this.clientes = clientes;
    });
  }
}

//post http.post<any>("http://localhost:3000/", objeto);
