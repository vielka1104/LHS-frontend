import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogReportsComponent } from '../../dialogs/dialog-reports/dialog-reports.component';

@Component({
  selector: 'app-home-staff',
  templateUrl: './home-staff.component.html',
  styleUrls: ['./home-staff.component.css']
})
export class HomeStaffComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  OpenReports(){
    const dialogRef = this.dialog.open(DialogReportsComponent)
  }
}