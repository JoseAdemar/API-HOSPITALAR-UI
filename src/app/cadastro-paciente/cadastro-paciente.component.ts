import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  pacientes: Array<any> = new Array();

    constructor(private pacienteService: PacientesService) {}

     ngOnInit() {
        this.listarPacientes();
     }

     listarPacientes() {
        this.pacienteService.listarPacientes().subscribe(dados => {
          this.pacientes = dados;

        }, err => {
          console.log('Erro ao listar os pacientes', err);
        })
     }




     categorias = [
      { label: '18', value: 1 },
      { label: '19', value: 2 },
      { label: '20', value: 3 },
      { label: '21', value: 4 },
      { label: '22', value: 5 },
      
    ];
}





 