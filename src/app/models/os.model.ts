import { PacienteModel } from 'src/app/models/pacient.model';

export class OrdemDeServicoModel {
    public id: number;
    public clinica: string;
    public medico: string;
    public paciente = new PacienteModel();
    public exame: string;
    public dataHora: string;

}
