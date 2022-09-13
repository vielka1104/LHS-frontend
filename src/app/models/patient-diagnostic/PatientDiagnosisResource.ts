import { DiagnosisResource } from './../diagnostic/DiagnosisResource';
import { PatientResource } from './../patient/PatientResource';
export interface PatientDiagnosisResource {
    id:number;
    startDate:Date;
    endDate:Date;
    patient:PatientResource;
    diagnosis:DiagnosisResource
}
