import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './pessoa/consulta/consulta.component';
import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
import { ConsultaCargoComponent } from './cargo/consulta/consultacargo.component';
import { CadastroCargoComponent } from './cargo/cadastro/cadastrocargo.component';

import {routing} from './../app.routes';

import {ConfigService} from './services/config.services';
import {PessoaService} from './services/pessoa.service';
import {CargoService} from './services/cargo.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent,
    ConsultaCargoComponent,
    CadastroCargoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ConfigService,PessoaService,CargoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
