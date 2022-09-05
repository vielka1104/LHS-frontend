import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  selecteddate !: Date;
  medical!:number;
  medicals:string[] = ["Dr. Concepción Zavaleta, Marcio Jose","Dr. Punis Reyes, Nevia Neda", "Dr. Uribe Tejada, Nancy Patricia"] 
  constructor() { }

  ngOnInit() {
    
  }

}
