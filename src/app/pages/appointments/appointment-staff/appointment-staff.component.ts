import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-staff',
  templateUrl: './appointment-staff.component.html',
  styleUrls: ['./appointment-staff.component.css']
})
export class AppointmentStaffComponent implements OnInit {
  selecteddate !: Date;
  patient!:number;
  patients:string[] = ["Alayo Zavaleta, Alessandro Fabián","Almonacid Garrido, Viviana", "Benavides Castillo, Daniela"] 
  
  constructor() { }

  ngOnInit() {
  }

}
