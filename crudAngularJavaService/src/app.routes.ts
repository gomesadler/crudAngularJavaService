import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
 
import { ConsultaComponent } from './app/pessoa/consulta/consulta.component';
import { ConsultaCargoComponent } from './app/cargo/consulta/consultacargo.component';

import {CadastroComponent} from './app/pessoa/cadastro/cadastro.component';
import {CadastroCargoComponent} from './app/cargo/cadastro/cadastrocargo.component';

import { HomeComponent } from './app/home/home.component';
 
const appRoutes: Routes = [
    { path: 'home',                    component: HomeComponent },
    { path: '',                        component: HomeComponent },
    { path: 'consulta-pessoa',         component: ConsultaComponent },
    { path: 'cadastro-pessoa',         component: CadastroComponent },
    { path: 'cadastro-pessoa/:id', component: CadastroComponent },
    { path: 'consulta-cargo',         component: ConsultaCargoComponent },
    { path: 'cadastro-cargo',         component: CadastroCargoComponent },
    { path: 'cadastro-cargo/:id', component: CadastroCargoComponent }
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);