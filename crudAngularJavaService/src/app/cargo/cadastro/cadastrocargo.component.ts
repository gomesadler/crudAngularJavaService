import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
 
import {CargoService} from '../../services/cargo.service';
 
import {Cargo} from '../../services/cargo';
 
import {Response} from '../../services/response';
 
import { Observable } from 'rxjs';
 
@Component({
    selector: 'app-cadastro-cargo',
    templateUrl: './cadastrocargo.component.html',
    styleUrls:["./cadastrocargo.component.css"]
  })
  export class CadastroCargoComponent implements OnInit {
 
    private titulo:string;
    private cargo:Cargo = new Cargo();
 
    constructor(private cargoService: CargoService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}
 
    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {
 
      this.activatedRoute.params.subscribe(parametro=>{
 
        if(parametro["id"] == undefined){
 
          this.titulo = "Novo Cadastro de Cargo";
        }
        else{
 
          this.titulo = "Editar Cadastro de Cargo";
          this.cargoService.getCargo(Number(parametro["id"])).subscribe(res => this.cargo = res);
        }
 
 
      });      
    }
 
    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    salvar():void {
 
      /*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
      if(this.cargo.id == undefined){
 
        /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
        this.cargoService.addCargo(this.cargo).subscribe(response => {
 
           //PEGA O RESPONSE DO RETORNO DO SERVIÇO
           let res:Response = <Response>response;
 
           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           if(res.codigo == 1){
            alert(res.mensagem);
            this.cargo = new Cargo();
           }
           else{
             /*
             ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
             NO SERVIDOR (CODIGO = 0)*/
             alert(res.mensagem);
           }
         },
         (erro) => {   
           /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
             EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
            alert(erro);
         });
 
      }
      else{
 
        /*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
        this.cargoService.atualizarCargo(this.cargo).subscribe(response => {
 
        //PEGA O RESPONSE DO RETORNO DO SERVIÇO
        let res:Response = <Response>response;
 
         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
        if(res.codigo == 1){
          alert(res.mensagem);
          this.router.navigate(['/consulta-cargo']);
        }
         else{
          /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
          NO SERVIDOR (CODIGO = 0)*/
           alert(res.mensagem);
         }
       },
       (erro) => {                    
         /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
          EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
          alert(erro);
       });
      }
 
    }
 
  }