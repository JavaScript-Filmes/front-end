import { LocacaoService } from "../../../../services/locacao.service";
import { ClienteService } from "../../../../services/cliente.service";
import { FilmeService } from "../../../../services/filme.service";
import { Locacao } from "../../../../modelos/Locacao";
import { Filme } from "../../../../modelos/Filme";
import { Cliente } from "../../../../modelos/Cliente";
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarLocacaoComponent implements OnInit {
  selectFormControl = new FormControl("", Validators.required);
  cliente!: string;
  filme!: string;
  arrayFilmes: Filme[] = [];
  arrayClientes: Cliente[] = [];
  locacao = new Locacao();

  constructor(
    private service: LocacaoService,
    private serviceFilme: FilmeService,
    private serviceCliente: ClienteService
  ) {}

  ngOnInit(): void {
    this.serviceFilme.listarFilmes().subscribe((filmes) => {
      this.arrayFilmes = filmes;
    });

    this.serviceCliente.listarClientes().subscribe((clientes) => {
      this.arrayClientes = clientes;
    });
  }

  atualizaFilme(val: any): void {
    this.locacao.filme = val.value._id;
    console.log(val.value);
  }

  atualizaCliente(val: any): void {
    this.locacao.cliente = val.value._id;
  }

  cadastrar(): void {
    this.locacao.data = new Date();

    this.service.cadastrarLocacao(this.locacao).subscribe((locacao) => {
      console.log(locacao);
    });
  }
}
