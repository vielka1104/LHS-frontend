import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponent implements OnInit {
  patient!: string;
  patients:string[] = ["Alayo Zavaleta, Alessandro Fabián","Almonacid Garrido, Viviana", "Benavides Castillo, Daniela"];
  apellido!:string;
  apellidos:string[] = ["Alayo","Almonacid","Benavides"];
  fecha!:string;
  fechas:string[] = ["23/05/2022","25/06/2022","15/07/2022"]; 

  constructor() { }

  ngOnInit() {
  }

}
