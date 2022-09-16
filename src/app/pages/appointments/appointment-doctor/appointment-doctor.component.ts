import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppointmentResource } from 'src/app/models/appointment/AppointmentResource';
import { AppointmentService } from 'src/app/services/appoinment/Appointment.service';

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
  
  displayedColumns: string[] = ['id', 'patient', 'date', 'status','button'];
  dataSource = new MatTableDataSource<any>();
  
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private appointmentservice:AppointmentService, private route:Router) {}
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAllAppointments();

  }

  SearchAppointmentDoctor(event:Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }

  }

  getAllAppointments(){
    this.appointmentservice.getAll().subscribe((response:any) =>{
        this.dataSource.data = response;
        console.log(this.dataSource.data)
        console.log(this.dataSource.data.length)
      }
    )
  }

  AppointmentForm(id:number){
    console.log(id)

    this.route.navigate([`/appointment-form/${id}`]);
  }

}
