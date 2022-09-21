import { formatDate } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentResource } from 'src/app/models/appointment/AppointmentResource';
import { DoctorResource } from 'src/app/models/doctor/DoctorResource';
import { PatientResource } from 'src/app/models/patient/PatientResource';
import { StaffResource } from 'src/app/models/staff/StaffResource';
import { AppointmentService } from 'src/app/services/appoinment/Appointment.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { PatientService } from 'src/app/services/patient/patient.service';
import { StaffService } from 'src/app/services/staff/staff.service';

export interface Appointment {
  dni: string;
  patient: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-appointment-staff',
  templateUrl: './appointment-staff.component.html',
  styleUrls: ['./appointment-staff.component.css']
})
export class AppointmentStaffComponent implements OnInit {
  selecteddate !: Date;
  dnisearch = new FormControl;
  patient!:number;
  iddoctor = new FormControl
  patientobject!:PatientResource
  doctorobject!:DoctorResource
  patients:string[] = ["Alayo Zavaleta, Alessandro Fabián","Almonacid Garrido, Viviana", "Benavides Castillo, Daniela"] 
  urlid!:number
  displayedColumns: string[] = ['id','dni' ,'patient', 'date', 'status','button'];
  dataSource = new MatTableDataSource<any>();
  staffobject!:StaffResource

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private appointmentservice:AppointmentService, private route:Router,private activeroute:ActivatedRoute, private patientservice:PatientService, 
              private staffservice:StaffService, private doctorservice:DoctorService) {
              }
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    let urlvariable = parseInt(this.activeroute.snapshot.paramMap.get('id')!);
    this.urlid = urlvariable
    console.log(this.urlid)
    this.getStaffById(this.urlid)
  }

  SearchAppointmentDoctor(event:Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }

  }

  getStaffById(id:number){
      this.staffservice.getStaffById(id).subscribe((response:any)=>{
        this.staffobject = response           
      })
  }
  
  getDoctorandAllAppointments(){
      this.doctorservice.getDoctorById(this.iddoctor.value).subscribe((response:any)=>{
        this.doctorobject = response
        
        this.appointmentservice.getAppointmentsByDoctorId(this.doctorobject.id).subscribe((response:any) =>{
          this.dataSource.data = response;
          console.log(this.dataSource.data)
          
          for(var oneappointment of this.dataSource.data){
            console.log(oneappointment)
            let dateformatselected = formatDate(oneappointment.scheduledAt,'YYYY-MM-dd HH:mm:ss','en_US')
            console.log(dateformatselected)

            const [finaldate,finalhour] = dateformatselected.split(' ');

            const [year, month, day] =  finaldate.split('-')
            
            const [hour, minute, seconds] =  finalhour.split(':')

            const dateformat = new Date(+year,+month-1,+day,+hour, +minute, +seconds);

            console.log(dateformat)
            
            oneappointment.scheduledAt = dateformat
            console.log(oneappointment)
          }
        })

      })

  }

  AppointmentForm(patientid:number){

    this.route.navigate([`staff/${this.staffobject.id}/staff-appointment-form/patient/${patientid}`]);
  }

  GotoStaffHome(id:number){
      this.route.navigate(['staff',id,'home-staff'])
  }

  GetPatientByDNI(){
        console.log(this.dnisearch.value)
        this.patientservice.getPatientByDocumentNumber(this.dnisearch.value).subscribe((response:any)=>{
          this.patientobject=response;
          console.log(this.patientobject)
          
          this.appointmentservice.getAppointmentsByPatientId(this.patientobject.id).subscribe((response:any)=>{
              this.dataSource.data = response;
              console.log(this.dataSource.data)
            })
        },err=>{
          alert("DNI inexistente pruebe denuevo")
        }
    )
  }
}