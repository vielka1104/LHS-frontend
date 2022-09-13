import { PatientResource } from './../patient/PatientResource';
export interface IllnessRecordResource {

    id:number;
    illness:string;

    
    description:string;
  
      
        date:Date;
        patient:PatientResource;
}
