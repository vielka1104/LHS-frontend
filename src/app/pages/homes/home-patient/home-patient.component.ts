import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  GoToAppointmentPatient(){
    this.route.navigate([`appointment-patient/patient/${1}`]);
  }
}
