import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header-reporter2',
  templateUrl: './header-reporter2.component.html',
  styleUrls: ['./header-reporter2.component.css']
})
export class HeaderReporter2Component implements OnInit {
  @Input() title !: string;
  @Input() returnpage !: string;
  whois=""
   id!:number
  constructor(private router:Router,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=parseInt(this.ActivatedRoute.snapshot.paramMap.get('id')!)
     this.whois=(this.ActivatedRoute.snapshot.url[0].path)
  }
  Gogenerar(){
    this.router.navigate(['/',this.whois,this.id,this.returnpage])
  }
}
