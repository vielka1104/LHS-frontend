import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-doctor',
  templateUrl: './appointment-doctor.component.html',
  styleUrls: ['./appointment-doctor.component.css']
})
export class AppointmentDoctorComponent implements OnInit {
  
  selecteddate !: Date;
  patient!:number;
  patients:string[] = ["Alayo Zavaleta, Alessandro Fabián","Almonacid Garrido, Viviana", "Benavides Castillo, Daniela"] 

  constructor() { }

  ngOnInit() {
  }

}
