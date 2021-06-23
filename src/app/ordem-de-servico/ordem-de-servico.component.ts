import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-de-servico',
  templateUrl: './ordem-de-servico.component.html',
  styleUrls: ['./ordem-de-servico.component.css']
})
export class OrdemDeServicoComponent {

  
  registros = [
    { nome: 'Pedro Martins',idade: '25', nascimento: '18/06/1990', telefone: '8542158' },
    { nome: 'Pedro Martins',idade: '25', nascimento: '18/06/1990', telefone: '8542158' },
    { nome: 'Pedro Martins',idade: '25', nascimento: '18/06/1990', telefone: '8542158' },
    
  ];
}


 