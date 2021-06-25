import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdemDeServicoModel } from './models/os.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdemDeServicoService {

 
  constructor(private http: HttpClient) { }


  cadastrarOrdemDeServico(ordemDeServico: OrdemDeServicoModel): Observable<any> {
    return this.http.post('http://localhost:8080/ordem-os', ordemDeServico);
  }

    public listarOrdemDeServico(): Observable<any> {
     return  this.http.get('http://localhost:8080/ordem-os');
   }

   atualizarOrdemDeServico(id:any, ordemDeServico: OrdemDeServicoModel): Observable<any> {
    return this.http.put('http://localhost:8080/ordem-os/'.concat(id), ordemDeServico);
  }

  removerOrdemDeServico(id:any){
    return this.http.delete('http://localhost:8080/ordem-os/'.concat(id));
  }
}
