import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {
  public titlecomopent="Reporte Dignostico"
  public linkcomponent="reporter-general-diagnostic"
  constructor() { }

  ngOnInit() {
  }

}
