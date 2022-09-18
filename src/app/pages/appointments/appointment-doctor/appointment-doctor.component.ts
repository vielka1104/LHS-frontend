import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentResource } from 'src/app/models/appointment/AppointmentResource';
import { AppointmentService } from 'src/app/services/appoinment/Appointment.service';
import { PatientService } from 'src/app/services/patient/patient.service';

export interface Appointment {
  dni: string;
  patient: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-appointment-doctor',
  templateUrl: './appointment-doctor.component.html',
  styleUrls: ['./appointment-doctor.component.css']
})
export class AppointmentDoctorComponent implements OnInit {
  selecteddate !: Date;
  patient!:number;
  patients:string[] = ["Alayo Zavaleta, Alessandro Fabián","Almonacid Garrido, Viviana", "Benavides Castillo, Daniela"] 
  urlid!:number
  displayedColumns: string[] = ['id', 'patient', 'date', 'status','button'];
  dataSource = new MatTableDataSource<any>();
  
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private appointmentservice:AppointmentService, private route:Router,private activeroute:ActivatedRoute, private patientservice:PatientService) {}
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    let urlvariable = parseInt(this.activeroute.snapshot.paramMap.get('id')!);
    this.urlid = urlvariable
    console.log(this.urlid)
    this.getAllAppointments(this.urlid)

  }

  SearchAppointmentDoctor(event:Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }

  }

  getAllAppointments(id:number){
    this.appointmentservice.getAppointmentsByDoctorId(id).subscribe((response:any) =>{
        this.dataSource.data = response;
        console.log(this.dataSource.data)
      }
    )
  }

  AppointmentForm(doctorid:number,patientid:number){
    console.log(doctorid)
    console.log(patientid)

    this.route.navigate([`/appointment-form/doctor/${doctorid}/patient/${patientid}`]);
  }

}
