import { TreatmentResource } from './../treatment/TreatmentResource';
import { MedicineResource } from './../medicine/MedicineResource';
import { PatientResource } from './../patient/PatientResource';
export interface PatientTreatmentResource {
    id:number;
    startDate:Date;
    endDate:Date;
    dose:number;
    patient:PatientResource;
    treatment:TreatmentResource;
    medicine:MedicineResource;
}
