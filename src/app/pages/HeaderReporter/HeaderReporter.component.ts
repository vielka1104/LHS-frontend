import { StaffService } from './../../services/staff/staff.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { DoctorResource } from './../../models/doctor/DoctorResource';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-HeaderReporter',
  templateUrl: './HeaderReporter.component.html',
  styleUrls: ['./HeaderReporter.component.css']
})
export class HeaderReporterComponent implements OnInit {
   @Input() title !: string;
   doctor=""
   staff=""
   whois=""
   id!:number
   DoctorResource!:DoctorResource
  constructor(private ActivatedRoute:ActivatedRoute,private Router:Router,private DoctorService:DoctorService,private StaffService:StaffService) { 
    this.DoctorResource={}as DoctorResource
  }

  ngOnInit() {
    
     this.id=parseInt(this.ActivatedRoute.snapshot.paramMap.get('id')!)
     this.whois=(this.ActivatedRoute.snapshot.url[0].path)
    
   
    console.log(this.whois)
  }
  ReturnHome(){ 

    if(this.whois=="doctor"){
      this.findDoctor(this.id)
    }
    if(this.whois=="staff"){
      this.findStaffr(this.id)
    }





  }
  findDoctor(id:number){
    this.DoctorService.getDoctorById(id).subscribe((response:any)=>{
               this.DoctorResource=response    
               this.Router.navigate(['/doctor',this.DoctorResource.id,'home-doctor'])       
    })
  }
  findStaffr(id:number){
    this.StaffService.getStaffById(id).subscribe((response:any)=>{
               this.DoctorResource=response    
               this.Router.navigate(['/staff',id,'home-staff'])       
    })
  }


}
