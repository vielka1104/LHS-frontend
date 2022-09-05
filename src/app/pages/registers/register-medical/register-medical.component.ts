import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from '../../dialogs/result-dialog/result-dialog.component';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-medical',
  templateUrl: './register-medical.component.html',
  styleUrls: ['./register-medical.component.css']
})
export class RegisterMedicalComponent implements OnInit {
  
  medicalregisterform!:FormGroup;
  specialvariable!:string;
  specialistlist: string[] = ["nefrología","urólogo"]
  shift!:string;
  shiftlist:string[] = ["Turno Mañana","Turno Tarde","Turno Noche"]
  constructor(public dialog:MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.medicalregisterform=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      gender:['',Validators.required],
      dni:['',Validators.required],
      address:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      speciality:['',Validators.required],
      shift:['',Validators.required],
     })
  }

  RegisterMethod(){
    const dialogRef = this.dialog.open(ResultDialogComponent)
  }
}
