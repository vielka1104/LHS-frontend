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

  doctor=""
  staff=""
  DoctorResource!:DoctorResource
  constructor(private Router:Router,private ActivatedRoute:ActivatedRoute,private DoctorService:DoctorService, @Inject(MAT_DIALOG_DATA) public data:any) { 

    this.DoctorResource={}as DoctorResource;
  }

  ngOnInit() {
    console.log(this.data)
  }
  gopatientrisk(){
    this.Router.navigate(['/doctor',this.data,'reporter-general-patient-risk'])
  }
  gotreatment(){
    this.Router.navigate(['/doctor',this.data,'reporter-general-treatment'])
    
  }
  godiagnosis(){
    this.Router.navigate(['/doctor',this.data,'reporter-general-diagnostic'])

  }
  gohealthindicator(){
    this.Router.navigate(['/doctor',this.data,'reporter-general-health-indicator'])
  }
  gotoeffciency(){
    this.Router.navigate(['/doctor',this.data,'reporter-efficiency'])
  }
}
