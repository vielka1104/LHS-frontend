import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-HeaderReporter',
  templateUrl: './HeaderReporter.component.html',
  styleUrls: ['./HeaderReporter.component.css']
})
export class HeaderReporterComponent implements OnInit {
   @Input() title !: string;
  constructor() { }

  ngOnInit() {
  }

}
