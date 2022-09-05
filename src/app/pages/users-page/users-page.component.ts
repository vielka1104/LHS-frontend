import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDoctorComponent } from './update-dialogs/update-doctor/update-doctor.component';
import { UpdatePatientComponent } from './update-dialogs/update-patient/update-patient.component';
import { UpdateStaffComponent } from './update-dialogs/update-staff/update-staff.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  selecteddate!:Date;
  medical!: string;
  medicals:string[] = ["Dr. Concepción Zavaleta, Marcio Jose","Dr. Punis Reyes, Nevia Neda", "Dr. Uribe Tejada, Nancy Patricia"]

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  
  DeleteDoctor(medicaltest:string){
    console.log(medicaltest)
    var index = this.medicals.indexOf(medicaltest)
    console.log(index)
    this.medicals.splice(index,1)
    console.log(this.medicals)
  }

  UpdateStaff(medicaltest:string){
    this.dialog.open(UpdateStaffComponent,{
      data:medicaltest 
    })
  }

  UpdateDoctor(medicaltest:string){
    this.dialog.open(UpdateDoctorComponent,{
      data:medicaltest
    })
  }

  UpdatePatient(medicaltest:string){
    this.dialog.open(UpdatePatientComponent,{
      data:medicaltest
    })
  }

}
