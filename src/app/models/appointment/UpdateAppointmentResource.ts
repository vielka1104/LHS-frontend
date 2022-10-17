
import { Status } from './../enum/Status.enum';
export interface UpdateAppointmentResource {
      notes:string;

    
      scheduledAt:Date;

      rating: number;

    
      status:Status;
}

