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
  constructor(private router:Router) { }

  ngOnInit() {
  }
  Gogenerar(){
    this.router.navigate(['/',this.returnpage])
  }
}
