import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-indicator',
  templateUrl: './health-indicator.component.html',
  styleUrls: ['./health-indicator.component.css']
})
export class HealthIndicatorComponent implements OnInit {
  public titlecomopent="Reporte de indicadores de salud"
  public linkcomponent="reporter-general-health-indicator"
  constructor() { }

  ngOnInit() {
  }

}
