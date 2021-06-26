import { PacienteModel } from './pacient.model';
export class OrdemDeServicoModel {
    public id: number;
    public clinica: string;
    public medico: string;
    public paciente: object;
    public exame: string;
    public dataHora: string

}
