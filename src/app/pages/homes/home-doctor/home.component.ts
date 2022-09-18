import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogReportsComponent } from '../../dialogs/dialog-reports/dialog-reports.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog:MatDialog,private route:Router) { }

  ngOnInit() {
  }

  OpenReports(){
    const dialogRef = this.dialog.open(DialogReportsComponent)
  }

  GoToAppointmentDoctor(){
    this.route.navigate([`appointment-doctor/doctor/${1}`]);
  }

}
