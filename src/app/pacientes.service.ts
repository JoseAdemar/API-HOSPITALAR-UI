import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosPacientes } from './models/placeholder.model';



@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient) { }

  public listarPacientes(): Observable<any> {
     return  this.http.get('http://localhost:8080/pacientes');
   }
}
