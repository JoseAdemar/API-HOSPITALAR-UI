import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/pacientes.service';
import { PacienteModel } from '../models/pacient.model';



@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  p: PacienteModel = new PacienteModel();
  pacientes: Array<any> = new Array();

    constructor(private pacienteService: PacientesService) {}

  ngOnInit() {
    this.listarPacientes();
  }

  atualizar(id: number) {
      this.pacienteService.atualizarPaciente(id, this.p).subscribe(data => {
      this.p = new PacienteModel();
      this.listarPacientes();

    }, error => { console.log('Erro ao atualizar cadastro de paciente', error) })
  }

  editar(id: number) {
    console.log(id);
    // aqui voce precisa chamar o metodo que busca por id, pra preencher o objeto.
    this.pacienteService.carregarPaciente(id, this.p).subscribe(data => {
      this.p = data;
      console.log(data);
    });

}


  remover(id:number){
      this.pacienteService.removerPaciente(id).subscribe(data => {
      this.p = new PacienteModel();
      this.listarPacientes();

    }, error => { console.log('Erro ao remover cadastro de paciente', error) })
  }



  cadastrar() {
    console.log(this.p);
    this.pacienteService.cadastrarPaciente(this.p).subscribe(data => {
         this.p = new PacienteModel();
         this.listarPacientes();

    }, error => { console.log('Erro ao cadastrar paciente', error) })
  }

  listarPacientes() {
    this.pacienteService.listarPacientes().subscribe(data => {
      this.pacientes = data;
      console.log(data);

    }, error => {
      console.log('Erro ao listar os pacientes', error);
    })
  }




   /*  categorias = [
      { label: '18', value: 1 },
      { label: '19', value: 2 },
      { label: '20', value: 3 },
      { label: '21', value: 4 },
      { label: '22', value: 5 },
    ];*/



  }



