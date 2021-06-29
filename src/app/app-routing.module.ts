import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarComponent } from "./components/views/filme/cadastrarFilme/cadastrar.component";
import { ListarComponent } from "./components/views/filme/listarFilme/listar.component";
import { AtualizarComponent } from "./components/views/filme/atualizarFilme/atualizar.component";
import { DeletarIdComponent } from "./components/views/filme/deletarFilme/deletar.component";
import { ListarIdComponent } from "./components/views/filme/listarFilmeId/listar.component";
import { ListarFavoritoComponent } from "./components/views/favorito/listarFavorito/listar.component";
import { DeletarFavoritoComponent } from "./components/views/favorito/deletarFavorito/deletar.component";
import { PrincipalLocacaoComponent } from "./components/views/locacao/principal/principal.component";
import { PrincipalFavoritoComponent } from "./components/views/favorito/principal/principal.component";
import { PrincipalFilmeComponent } from "./components/views/filme/principal/principal.component";
import { PrincipalClienteComponent } from "./components/views/cliente/principal/principal.component";
import { CadastrarFavoritoComponent } from "./components/views/favorito/cadastrarFavorito/cadastrar.component";
import { ListarClienteComponent } from "./components/views/cliente/listarCliente/listar.component";
import { ListarClienteIdComponent } from "./components/views/cliente/listarClienteId/listar.component";
import { CadastrarClienteComponent } from "./components/views/cliente/cadastrarCliente/cadastrar.component";
import { CadastrarLocacaoComponent } from "./components/views/locacao/cadastrarLocacao/cadastrar.component";
import { ListarLocacaoComponent } from "./components/views/locacao/listarLocacao/listar.component";
import { ListarLocacaoIdComponent } from "./components/views/locacao/listarIdLocacao/listar.component";
import { DeletarIdLocacaoComponent } from "./components/views/locacao/deletarLocacao/deletar.component";
import { AtualizarLocacaoComponent } from "./components/views/locacao/atualizarLocacao/atualizar.component";

const routes: Routes = [
  {
    path: "",
    component: ListarComponent,
  },
  {
    path: "filme/principal",
    component: PrincipalFilmeComponent,
  },
  {
    path: "filme/cadastrar",
    component: CadastrarComponent,
  },
  {
    path: "filme/listarId",
    component: ListarIdComponent,
  },
  {
    path: "filme/atualizar",
    component: AtualizarComponent,
  },
  {
    path: "filme/deletar",
    component: DeletarIdComponent,
  },
  {
    path: "favorito/listar",
    component: ListarFavoritoComponent,
  },
  {
    path: "favorito/principal",
    component: PrincipalFavoritoComponent,
  },
  {
    path: "favorito/deletar",
    component: DeletarFavoritoComponent,
  },
  {
    path: "favorito/cadastrar",
    component: CadastrarFavoritoComponent,
  },
  {
    path: "cliente/principal",
    component: PrincipalClienteComponent,
  },
  {
    path: "cliente/cadastrar",
    component: CadastrarClienteComponent,
  },
  {
    path: "cliente/listar",
    component: ListarClienteComponent,
  },
  {
    path: "cliente/listarId",
    component: ListarClienteIdComponent,
  },
  {
    path: "locacao/principal",
    component: PrincipalLocacaoComponent,
  },
  {
    path: "locacao/cadastrar",
    component: CadastrarLocacaoComponent,
  },
  {
    path: "locacao/listar",
    component: ListarLocacaoComponent,
  },
  {
    path: "locacao/listarId",
    component: ListarLocacaoIdComponent,
  },
  {
    path: "locacao/deletar",
    component: DeletarIdLocacaoComponent,
  },
  {
    path: "locacao/atualizar",
    component: AtualizarLocacaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
