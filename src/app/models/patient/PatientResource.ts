import { RenalDiseaseResource } from './../renal-disease/RenalDiseaseResource';
export interface PatientResource {
    id:number;
    name:string;

    lastname:string;

 
    documentType:DocumentType;

  
   documentNumber:string;

 
    birthday:Date;

  
  gender:string;

  
  email:string;

  
   phone:string;

  
  username:string;

  
  password:string;

  height:string;
  renalDisease:RenalDiseaseResource
}
