import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  listappointment:Appointment[] = [];
  appointmenttest:Appointment = {dni: "123456789",patient:"paciente 1",date:"12/02/2022",status: "en curso"};
  appointmenttest2:Appointment = {dni: "987456123",patient:"paciente 2",date:"12/02/2021",status: "cancelada"};  
  selecteddate !: Date;
  patient!:number;
  patients:string[] = ["Alayo Zavaleta, Alessandro Fabián","Almonacid Garrido, Viviana", "Benavides Castillo, Daniela"] 
  
  displayedColumns: string[] = ['dni', 'patient', 'date', 'status','button'];
  dataSource = new MatTableDataSource<any>();
  
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor() {}
  
  ngOnInit() {
    console.log(this.appointmenttest)
    console.log(this.listappointment)
    this.listappointment.push(this.appointmenttest);
    this.listappointment.push(this.appointmenttest2);  
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.listappointment;
      
  }

}
