import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monit-patient-risk',
  templateUrl: './monit-patient-risk.component.html',
  styleUrls: ['./monit-patient-risk.component.css']
})
export class MonitPatientRiskComponent implements OnInit {
  public titlecomopent="Monitoreo de paciente en riesgo"
  public linkcomponent="reporter-general-patient-risk"
  constructor() { }

  ngOnInit() {
  }

}
