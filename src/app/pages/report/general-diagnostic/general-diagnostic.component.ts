import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-diagnostic',
  templateUrl: './general-diagnostic.component.html',
  styleUrls: ['./general-diagnostic.component.css']
})
export class GeneralDiagnosticComponent implements OnInit {
  public titlecomopent="Diagnostico"
  whois=""
   id!:number
  constructor(private Router:Router,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=parseInt(this.ActivatedRoute.snapshot.paramMap.get('id')!)
    this.whois=(this.ActivatedRoute.snapshot.url[0].path)
  }
  enterSpecific(){
    this.Router.navigate(['/',this.whois,this.id,"reporter-diagnostic"])
  }
}
