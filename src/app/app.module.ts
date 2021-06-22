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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroPacienteComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    InputTextModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
