import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent {

  registros = [
    { nome: 'Pedro Martins', telefone: '8542158' },
    { nome: 'Maria Eloisa', telefone: '85421585' },
    { nome: 'José Junior', telefone: '85421585' }
  ];
}
