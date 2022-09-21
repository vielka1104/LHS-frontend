import { TreatmentService } from 'src/app/services/ehr/treatment.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { StaffService } from './../../services/staff/staff.service';
import { PatientService } from './../../services/patient/patient.service';
import { LoginResource } from './../../models/login/LoginResource';

import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginform!: FormGroup
  hide:boolean = true
  LoginResource!:LoginResource
  constructor(private formBuilder: FormBuilder,private route:Router,private LoginService:LoginService,private PatientService:PatientService,private StaffService:StaffService,private DoctorService:DoctorService
    ,private TreatmentService:TreatmentService) { 
    this.LoginResource={}as LoginResource;
  }

  ngOnInit() {
    this.loginform=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
     })
     this.gettretamnet()
  }

  login(){
    this.LoginService.login(this.LoginResource).subscribe((response:any)=>{
            console.log(response)
          
           if(response.specialty!=undefined){
                this.GoToHomeDoctor(response.id)
           } 
           if(response.role!=undefined){
            this.GoToHomeStaff(response.id)
           }
           if(response[0].birthday!=undefined){
                console.log("aqui")
                this.GoToHomePatient(response[0].id)
           }
           
    })
  }


 
  gettretamnet(){
    this.TreatmentService.getAllTreatments().subscribe((response:any)=>{
          console.log(response)
    })
  }


  GoToHomeDoctor(id:number){
    this.route.navigate([`doctor/${id}/home-doctor`])
  }
  GoToHomePatient(id:number){
    this.route.navigate([`patient/${id}/home-patient`])
  }
  GoToHomeStaff(id:number){
    this.route.navigate([`staff/${id}/home-staff`])
  }
}
