import { OrdemDeServicoService } from './ordem-de-servico.service';
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
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroPacienteComponent,
    OrdemDeServicoComponent,
    HomeComponent
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
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot([

        { path: '', component: HomeComponent},
        { path: 'cadastro-paciente', component: CadastroPacienteComponent},
        { path: 'cadastro-paciente/:id', component: CadastroPacienteComponent},
        { path: 'cadastro-os', component: OrdemDeServicoComponent},
        { path: 'cadastro-os/:id', component: OrdemDeServicoComponent},
    ])
  ],

  providers: [HttpClientModule, PacientesService,OrdemDeServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
