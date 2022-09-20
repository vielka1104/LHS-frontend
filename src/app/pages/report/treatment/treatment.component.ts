import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
  public titlecomopent="Tratamientos"
  whois=""
  id!:number
 constructor(private Router:Router,private ActivatedRoute:ActivatedRoute) { }

 ngOnInit() {
   this.id=parseInt(this.ActivatedRoute.snapshot.paramMap.get('id')!)
   this.whois=(this.ActivatedRoute.snapshot.url[0].path)
 }
 enterSpecific(){
   this.Router.navigate(['/',this.whois,this.id,"reporter-treatment"])
 }

}
