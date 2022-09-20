import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-risk',
  templateUrl: './patient-risk.component.html',
  styleUrls: ['./patient-risk.component.css']
})
export class PatientRiskComponent implements OnInit {
  public titlecomopent="Monitoreo Paciente en riesgo"
  whois=""
  id!:number
 constructor(private Router:Router,private ActivatedRoute:ActivatedRoute) { }

 ngOnInit() {
   this.id=parseInt(this.ActivatedRoute.snapshot.paramMap.get('id')!)
   this.whois=(this.ActivatedRoute.snapshot.url[0].path)
 }
 enterSpecific(){
   this.Router.navigate(['/',this.whois,this.id,"reporter-patient-risk"])
 }

}
