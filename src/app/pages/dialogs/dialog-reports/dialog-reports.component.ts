import { DoctorResource } from './../../../models/doctor/DoctorResource';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-reports',
  templateUrl: './dialog-reports.component.html',
  styleUrls: ['./dialog-reports.component.css']
})
export class DialogReportsComponent implements OnInit {

  word1!:string
  DoctorResource!:DoctorResource
  constructor(private Router:Router,private ActivatedRoute:ActivatedRoute,private DoctorService:DoctorService, @Inject(MAT_DIALOG_DATA) public data:any) { 

    this.DoctorResource={}as DoctorResource;
  }

  ngOnInit() {
    console.log(this.data)
    if(this.data.name=="doctor"){
      this.word1="doctor"
    }
    if(this.data.name=="staff"){
      this.word1="staff"
    }
  }


  gopatientrisk(){
    this.Router.navigate([this.word1,this.data.id,'reporter-general-patient-risk'])
  }
  gotreatment(){
    this.Router.navigate([this.word1,this.data.id,'reporter-general-treatment'])
    
  }
  godiagnosis(){
    this.Router.navigate([this.word1,this.data.id,'reporter-general-diagnostic'])

  }
  gohealthindicator(){
    this.Router.navigate([this.word1,this.data.id,'reporter-general-health-indicator'])
  }
  gotoeffciency(){
    this.Router.navigate([this.word1,this.data.id,'reporter-efficiency'])
  }
}
