import { Component, OnInit } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogAppointmentComponent } from '../../dialogs/result-dialog-appointment/result-dialog-appointment.component';

@Component({
  selector: 'app-medical-schedule',
  templateUrl: './medical-schedule.component.html',
  styleUrls: ['./medical-schedule.component.css']
})
export class MedicalScheduleComponent implements OnInit {
  patient!:string;
  patients:string[] = ["Paciente 1","Paciente 2","Paciente 3", "Paciente 4", "Paciente 5"];
  scheduleform!: FormGroup;

  constructor(public dialog:MatDialog, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.scheduleform=this.formBuilder.group({
      addpatient:['',Validators.required],
      date:['',Validators.required]
     })
  }

  RegisterMethod(){
    const dialogRef = this.dialog.open(ResultDialogAppointmentComponent)
  }

}
