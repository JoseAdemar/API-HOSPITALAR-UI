import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PacienteModel } from './models/pacient.model';




@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient) { }


  cadastrarPaciente(paciente: PacienteModel): Observable<any> {
    return this.http.post('http://localhost:8080/pacientes', paciente);
  }

    public listarPacientes(): Observable<any> {
     return  this.http.get('http://localhost:8080/pacientes');
   }

   atualizarPaciente(id:any, paciente: PacienteModel): Observable<any> {
    return this.http.put('http://localhost:8080/pacientes/'.concat(id), paciente);
  }

  carregarPaciente(id:any, paciente: PacienteModel): Observable<any> {
    return this.http.get('http://localhost:8080/pacientes/'.concat(id));
  }

  removerPaciente(id:any){
    return this.http.delete('http://localhost:8080/pacientes/'.concat(id));
  }
}
