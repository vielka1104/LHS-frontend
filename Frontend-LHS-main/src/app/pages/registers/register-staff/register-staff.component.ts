import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from '../../dialogs/result-dialog/result-dialog.component';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-staff',
  templateUrl: './register-staff.component.html',
  styleUrls: ['./register-staff.component.css']
})
export class RegisterStaffComponent implements OnInit {
  
  staffregisterform!:FormGroup;
  role!:string;
  rolelist:string[] = ["Admin","Nurse"]

  constructor(public dialog:MatDialog, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.staffregisterform=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      dni:['',Validators.required],
      gender:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      role:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
     })
  }

  RegisterMethod(){
    const dialogRef = this.dialog.open(ResultDialogComponent)
  }

}
