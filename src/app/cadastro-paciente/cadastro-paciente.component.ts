import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent {

  categorias = [
    { label: '18', value: 1 },
    { label: '19', value: 2 },
    { label: '20', value: 3 },
    { label: '21', value: 4 },
    { label: '22', value: 5 },
    
  ];
  

  registros = [
    { nome: 'Pedro Martins',idade: '25', nascimento: '18/06/1990', telefone: '8542158' },
    { nome: 'Pedro Martins',idade: '25', nascimento: '18/06/1990', telefone: '8542158' },
    { nome: 'Pedro Martins',idade: '25', nascimento: '18/06/1990', telefone: '8542158' },
    
  ];
}


 