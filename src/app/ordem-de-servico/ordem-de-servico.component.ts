import { Component, OnInit } from '@angular/core';
import { OrdemDeServicoService } from 'src/app/ordem-de-servico.service';
import { OrdemDeServicoModel } from '../models/os.model';

@Component({
  selector: 'app-ordem-de-servico',
  templateUrl: './ordem-de-servico.component.html',
  styleUrls: ['./ordem-de-servico.component.css']
})
export class OrdemDeServicoComponent implements OnInit {


  registro: OrdemDeServicoModel = new OrdemDeServicoModel();
  ordemDeServico: Array<any> = new Array();
  ngx: any;

    constructor(private ordemDeServicoService: OrdemDeServicoService) {}

  ngOnInit() {
    this.listarOrdemDeServico();
  }

  atualizar(id: number) {
      this.ordemDeServicoService.atualizarOrdemDeServico(id, this.registro).subscribe(data => {
      this.registro = new OrdemDeServicoModel();
      this.listarOrdemDeServico();

    }, error => { console.log('Erro ao atualizar OS de ordem de serviço', error) })
  }

  editar(id: number) {
    this.ordemDeServicoService.carregarOrdemDeServico(id, this.registro).subscribe(data => {
    this.registro = data;
  });
}

  remover(id:number){
      this.ordemDeServicoService.removerOrdemDeServico(id).subscribe(data => {
      this.registro = new OrdemDeServicoModel();
      this.listarOrdemDeServico();

    }, error => { console.log('Erro ao remover OS de ordem de serviço', error) })
  }



  cadastrar() {

    this.ordemDeServicoService.cadastrarOrdemDeServico(this.registro).subscribe(data => {
         this.registro = new OrdemDeServicoModel();
         console.log(this.registro);
         this.listarOrdemDeServico();


    }, error => { console.log('Erro ao cadastrar OS', error) })
  }

  listarOrdemDeServico() {
    this.ordemDeServicoService.listarOrdemDeServico().subscribe(data => {
      this.ordemDeServico = data;
      console.log(data);

    }, error => {
      console.log('Erro ao listar OS', error);
    })
  }






 /*
  registros = [
    { nome: 'Pedro Martins',idade: '25', nascimento: '18/06/1990', telefone: '8542158' },
    { nome: 'Pedro Martins',idade: '25', nascimento: '18/06/1990', telefone: '8542158' },
    { nome: 'Pedro Martins',idade: '25', nascimento: '18/06/1990', telefone: '8542158' },

  ];
}

*/
}
