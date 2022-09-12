import { Medicamento } from "./Medicamento"
import { Paciente } from "./Paciente"

export interface Tratamiento {

    id:number
    fechaInicio:Date
    fechaFin:Date
    dosis:number
    paciente_id:Paciente
    //tratamiento_id INTEGER
    medicamento_id:Medicamento



}
