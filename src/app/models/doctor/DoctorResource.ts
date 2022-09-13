import { SpecialtyResource } from './../specialty/SpecialtyResource';
import { ShiftResource } from './../shift/ShiftResource';
export interface DoctorResource {
      id:number;
      name:string;
      lastname:string;
      gender:string;
      dni:string;
      address:string;
      email:string;
      phone:string;
      username:string;
      password:string;
      specialty:SpecialtyResource;
      shift:ShiftResource;
}
