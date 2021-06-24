import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CardModule} from 'primeng/card';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { TableModule } from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdemDeServicoComponent } from './ordem-de-servico/ordem-de-servico.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { PacientesService } from './pacientes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroPacienteComponent,
    OrdemDeServicoComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    InputTextModule,
    NgbModule,
    DropdownModule,
    CalendarModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    HttpClientModule

  ],
  providers: [HttpClientModule, PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
