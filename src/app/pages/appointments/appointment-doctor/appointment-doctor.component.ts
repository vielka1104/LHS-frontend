import { formatDate } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentResource } from 'src/app/models/appointment/AppointmentResource';
import { DoctorResource } from 'src/app/models/doctor/DoctorResource';
import { PatientResource } from 'src/app/models/patient/PatientResource';
import { AppointmentService } from 'src/app/services/appoinment/Appointment.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { PatientService } from 'src/app/services/patient/patient.service';
import { DatePipe } from '@angular/common';
export interface Appointment {
  dni: string;
  patient: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-appointment-doctor',
  templateUrl: './appointment-doctor.component.html',
  styleUrls: ['./appointment-doctor.component.css'],
  providers: [DatePipe]
})
export class AppointmentDoctorComponent implements OnInit {
  selecteddate !: Date;
  patient!:number;
  dnisearch = new FormControl;
  patientobject!:PatientResource
  patients:string[] = ["Alayo Zavaleta, Alessandro Fabián","Almonacid Garrido, Viviana", "Benavides Castillo, Daniela"] 
  urlid!:number
  displayedColumns: string[] = ['id','dni','patient','button'];
  dataSource = new MatTableDataSource<any>();
  doctorobject!:DoctorResource

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private appointmentservice:AppointmentService, private route:Router,private activeroute:ActivatedRoute, private datePipe: DatePipe,private patientservice:PatientService, 
              private doctorservice:DoctorService) {}
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    let urlvariable = parseInt(this.activeroute.snapshot.paramMap.get('id')!);
    this.urlid = urlvariable
    console.log(this.urlid)
    this.getAllAppointments(this.urlid)
    this.getDoctorById(this.urlid)
  }

  SearchAppointmentDoctor(event:Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }

  }

  getDoctorById(id:number){
      this.doctorservice.getDoctorById(id).subscribe((response:any)=>{
        this.doctorobject = response           
      })
  }

  getAllAppointments(id:number){
    this.patientservice.getAllPatients().subscribe((response:any) =>{
        this.dataSource.data = response;
      }
    )
  }

  AppointmentForm(doctorid:number,patientid:number){
    this.route.navigate([`doctor/${doctorid}/profiles/patient/${patientid}`]);
  }

  GotoDoctorHome(id:number){
      this.route.navigate(['doctor',id,'home-doctor'])
  }
 
  GetPatientByDNI(){
    console.log(this.dnisearch.value)
    this.patientservice.getPatientByDocumentNumber(this.dnisearch.value).subscribe((response:any)=>{
      let patient: any[] = [];
      patient.push(response)
      this.dataSource.data = patient;
    },err=>{
      alert("DNI inexistente pruebe de nuevo")
    }
    )
  }
  getfecha(date:any){




    let datform=this.datePipe.transform(date, 'dd/MM/yyyy')!;
    let dataframe=this.datePipe.transform(date, 'HH:mm')!;
    let contat=`${datform}  ${dataframe}`
    
    
    return contat
    
    }

}
