import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
 
import {CargoService} from '../../services/cargo.service';
 
import {Cargo} from '../../services/cargo';
 
import {Response} from '../../services/response';
 
@Component({
    selector: 'app-consulta-cargo',
    templateUrl: './consultacargo.component.html',
    styleUrls:["./consultacargo.component.css"]
  })
  export class ConsultaCargoComponent implements OnInit {
 
    private cargos: Cargo[] = new Array();
    private titulo:string;
 
    constructor(private cargoService: CargoService,
                private router: Router){}
 
    ngOnInit() {
 
      /*SETA O TÍTULO */
      this.titulo = "Cargos Cadastrados";
 
      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.cargoService.getCargos().subscribe(res => this.cargos = res);
    }
 
    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA 
     * LINHA DA TABELA*/
    excluir(codigo:number, index:number):void {
 
      if(confirm("Deseja realmente excluir esse cargo?")){
 
        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.cargoService.excluirCargo(codigo).subscribe(response => {
 
              /**PEGA O RESPONSE DO SERVIÇO */
              let res:Response = <Response>response;
 
              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if(res.codigo == 1){
                alert(res.mensagem);
                this.cargos.splice(index,1);
              }
              else{
                /*0 = EXCEPTION GERADA NO SERVIÇO JAVA */
                alert(res.mensagem);
              } 
          },
          (erro) => {                    
               /*MOSTRA ERROS NÃO TRATADOS */
               alert(erro);
          });        
      }
 
    }
 
    editar(id:number):void{
 
      this.router.navigate(['/cadastro-cargo',id]);
 
    }
 
  }