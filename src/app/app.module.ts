import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListarComponent } from "./components/views/filme/listarFilme/listar.component";
import { AtualizarComponent } from "./components/views/filme/atualizarFilme/atualizar.component";
import { DeletarIdComponent } from "./components/views/filme/deletarFilme/deletar.component";
import { ListarIdComponent } from "./components/views/filme/listarFilmeId/listar.component";
import { CadastrarComponent } from "./components/views/filme/cadastrarFilme/cadastrar.component";
import { ListarFavoritoComponent } from "./components/views/favorito/listarFavorito/listar.component";
import { DeletarFavoritoComponent } from "./components/views/favorito/deletarFavorito/deletar.component";
import { CadastrarFavoritoComponent } from "./components/views/favorito/cadastrarFavorito/cadastrar.component";
import { ListarClienteComponent } from "./components/views/cliente/listarCliente/listar.component";
import { ListarClienteIdComponent } from "./components/views/cliente/listarClienteId/listar.component";
import { CadastrarClienteComponent } from "./components/views/cliente/cadastrarCliente/cadastrar.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { ContentComponent } from "./components/template/content/content.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CadastrarLocacaoComponent } from "./components/views/locacao/cadastrarLocacao/cadastrar.component";
import { ListarLocacaoComponent } from "./components/views/locacao/listarLocacao/listar.component";
import { ListarLocacaoIdComponent } from "./components/views/locacao/listarIdLocacao/listar.component";
import { DeletarIdLocacaoComponent } from "./components/views/locacao/deletarLocacao/deletar.component";
import { AtualizarLocacaoComponent } from "./components/views/locacao/atualizarLocacao/atualizar.component";

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ListarIdComponent,
    CadastrarComponent,
    DeletarIdComponent,
    AtualizarComponent,
    ListarFavoritoComponent,
    DeletarFavoritoComponent,
    CadastrarFavoritoComponent,
    ListarClienteComponent,
    ListarClienteIdComponent,
    CadastrarClienteComponent,
    CadastrarLocacaoComponent,
    ListarLocacaoComponent,
    ListarLocacaoIdComponent,
    AtualizarLocacaoComponent,
    DeletarIdLocacaoComponent,
    HeaderComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
