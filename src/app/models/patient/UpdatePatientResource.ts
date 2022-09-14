import { DocumentType } from "./DocumentType.enum";
export interface UpdatePatientResource{

    name:string

    lastname:string

    documentType:DocumentType

    documentNumber:string

    birthday:Date

    gender:string

    email:string

    phone:string 

    username:string

    password:string

    height:string
}