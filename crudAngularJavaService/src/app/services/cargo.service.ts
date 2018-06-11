import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';
 

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


 
import {Cargo} from '../services/cargo';
import {ConfigService} from './config.services';
 
@Injectable()
export class CargoService {
 
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;
 
    constructor(private http: Http,
                private configService: ConfigService) { 
 
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/cargo/';
 
        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers });
    }
 
    /**CONSULTA TODAS AS PESSOAS CADASTRADAS */
    getCargos(){        
        return this.http.get(this.baseUrlService).pipe(map(res => res.json()));
    }
 
    /**ADICIONA UMA NOVA PESSOA */
    addCargo(cargo: Cargo){
 
        return this.http.post(this.baseUrlService, JSON.stringify(cargo),this.options)
        .pipe(map(res => res.json()));
    }
    /**EXCLUI UMA PESSOA */
    excluirCargo(codigo:number){
 
        return this.http.delete(this.baseUrlService + codigo).pipe(map(res => res.json()));
    }
 
    /**CONSULTA UMA PESSOA PELO CÓDIGO */
    getCargo(codigo:number){
 
        return this.http.get(this.baseUrlService + codigo).pipe(map(res => res.json()));
    }
 
    /**ATUALIZA INFORMAÇÕES DA PESSOA */
    atualizarCargo(cargo:Cargo){
 
        return this.http.put(this.baseUrlService, JSON.stringify(cargo),this.options)
        .pipe(map(res => res.json()));
    }
 
}