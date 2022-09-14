import {Role} from './Role.enum'
export interface UpdateStaffResource{

      name:string;
      lastname:string;

      dni:string;
      gender:string;

      role:Role;
    
      email:string;

    
      phone:string;

   
      username:string;
   
      password:string;

}