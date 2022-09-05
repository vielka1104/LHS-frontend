import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from '../../dialogs/result-dialog/result-dialog.component';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  userregisterform!:FormGroup;

  constructor(public dialog:MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userregisterform=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      document:['',Validators.required],
      numberdocument:['',Validators.required],
      birthday:['',Validators.required],
      gender:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
     })
  }

  RegisterMethod(){
    const dialogRef = this.dialog.open(ResultDialogComponent)
  }
  
}
