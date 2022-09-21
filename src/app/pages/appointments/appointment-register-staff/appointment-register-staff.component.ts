import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientResource } from 'src/app/models/patient/PatientResource';
import { StaffResource } from 'src/app/models/staff/StaffResource';
import { AppointmentService } from 'src/app/services/appoinment/Appointment.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { PatientService } from 'src/app/services/patient/patient.service';
import { StaffService } from 'src/app/services/staff/staff.service';

@Component({
  selector: 'appointment-register-staff',
  templateUrl: './appointment-register-staff.component.html',
  styleUrls: ['./appointment-register-staff.component.css']
})
export class AppointmentRegisterStaffComponent implements OnInit {
  selecteddate !: Date;
  staffobject!:StaffResource
  patientobject!:PatientResource
  urlstaffid!:number
  urlpatientid!:number
  medical!:number;
  medicals:string[] = ["Dr. Concepción Zavaleta, Marcio Jose","Dr. Punis Reyes, Nevia Neda", "Dr. Uribe Tejada, Nancy Patricia"] 
  constructor(private activeroute:ActivatedRoute,private route:Router,private doctorservice:DoctorService, private patientservice:PatientService,private staffservice:StaffService) { }
  dataSource = new MatTableDataSource<any>();


  ngOnInit() {

    let urlstaffvariable = parseInt(this.activeroute.snapshot.paramMap.get('id')!);
    this.urlstaffid = urlstaffvariable
    console.log(this.urlstaffid)
    this.getDoctorAppointments()
    this.getStaffbyId(this.urlstaffid)
  }

  getDoctorAppointments(){
    this.doctorservice.getAllDoctors().subscribe( (response:any) =>{
        this.dataSource.data = response
        console.log(this.dataSource.data)
      }
    )
  }

  getStaffbyId(id:number){
    this.staffservice.getStaffById(id).subscribe( (response:any) =>{
        this.staffobject = response
        console.log(this.staffobject)
      }
    )
  }
  
  getPatientbyId(id:number){
    this.patientservice.getPatientById(id).subscribe( (response:any) =>{
        this.patientobject = response
        console.log(this.patientobject)
      }
    )
  }

  GoToMedicalScheduleStaff(doctorid:number){
    this.route.navigate([`staff/${this.staffobject.id}/medical-schedule/doctor/${doctorid}`]);
  }

  GoToHomeStaff(){
    this.route.navigate([`staff/${this.staffobject.id}/home-staff`]);
  }

}
