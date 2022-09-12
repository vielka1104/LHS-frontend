import { Diagnostico } from "./Diagnostico";
import { Paciente } from "./Paciente";

export interface DiagnosticoPaciente {
id:number
fechaInicio:Date;
fechaFin:Date;
paciente_id:Paciente
diagnostico_id:Diagnostico
}
