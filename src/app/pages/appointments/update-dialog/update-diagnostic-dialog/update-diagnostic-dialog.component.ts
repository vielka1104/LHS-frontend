import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateDiagnosisResource } from 'src/app/models/diagnostic/CreateDiagnosisResource';
import { CreatePatientDiagnosisResource } from 'src/app/models/patient-diagnostic/CreatePatientDiagnosisResource';

@Component({
  selector: 'app-update-diagnostic-dialog',
  templateUrl: './update-diagnostic-dialog.component.html',
  styleUrls: ['./update-diagnostic-dialog.component.css']
})
export class UpdateDiagnosticDialogComponent implements OnInit {

  diagnosticeditform!:FormGroup;
 
  CreateDiagnosticResource!:CreatePatientDiagnosisResource
  constructor(private formBuilder:FormBuilder, @Inject(MAT_DIALOG_DATA) public editdiagnosticdata:any) {
      this.CreateDiagnosticResource= {} as CreatePatientDiagnosisResource
   }

  ngOnInit() {
    this.diagnosticeditform=this.formBuilder.group({
      initdate:['',Validators.required],
      enddate:[''],
     })
     
     if(this.editdiagnosticdata){
        this.diagnosticeditform.controls['initdate'].setValue(this.editdiagnosticdata.startDate);
        this.diagnosticeditform.controls['enddate'].setValue(this.editdiagnosticdata.endDate);
     }
  }
  Update(){
        this.CreateDiagnosticResource.startDate= this.diagnosticeditform.controls['initdate'].value
        this.CreateDiagnosticResource.endDate= this.diagnosticeditform.controls['enddate'].value
    
        this.editdiagnosticdata.startDate= this.CreateDiagnosticResource.startDate;
        this.editdiagnosticdata.endDate= this.CreateDiagnosticResource.endDate;

        console.log(this.editdiagnosticdata)

  }
}
