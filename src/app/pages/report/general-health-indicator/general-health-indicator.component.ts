import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-health-indicator',
  templateUrl: './general-health-indicator.component.html',
  styleUrls: ['./general-health-indicator.component.css']
})
export class GeneralHealthIndicatorComponent implements OnInit {
  public titlecomopent="Indicadores de salud"
  whois=""
   id!:number
  constructor(private Router:Router,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=parseInt(this.ActivatedRoute.snapshot.paramMap.get('id')!)
    this.whois=(this.ActivatedRoute.snapshot.url[0].path)
  }
  enterSpecific(){
    this.Router.navigate(['/',this.whois,this.id,"reporter-health-indicator"])
  }

}
