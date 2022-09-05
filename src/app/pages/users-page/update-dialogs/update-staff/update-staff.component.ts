import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {
  
  staffeditform!:FormGroup;
  role!:string;
  rolelist:string[] = ["Admin","Nurse"]
  
  constructor(private formBuilder:FormBuilder, @Inject(MAT_DIALOG_DATA) public editstaffdata:any) { }

  ngOnInit() {
    this.staffeditform=this.formBuilder.group({
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
     
     if(this.editstaffdata){
        this.staffeditform.controls['name'].setValue(this.editstaffdata);
     }
  }

}
