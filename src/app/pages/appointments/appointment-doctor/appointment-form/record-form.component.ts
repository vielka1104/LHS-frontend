import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogRecordComponent } from '../../../dialogs/result-dialog-record/result-dialog-record.component';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { ResultDialogAncientComponent } from 'src/app/pages/dialogs/result-dialog-ancient/result-dialog-ancient.component';
import { ResultDialogClinicComponent } from 'src/app/pages/dialogs/result-dialog-clinic/result-dialog-clinic.component';
import { ResultDialogTreatmentComponent } from 'src/app/pages/dialogs/result-dialog-treatment/result-dialog-treatment.component';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit {
  patientrecordform!:FormGroup
  displayvigilancy!:boolean
  backrecordform!:FormGroup
  diagnosticform!:FormGroup
  treatmentform!:FormGroup
  treatmenttype!:String;
  treatmenttypes:String[] = ["Treatment 1","Treatment 2","Treatment 3"]

  constructor(public dialog:MatDialog, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.patientrecordform=this.formBuilder.group({
      height:['',Validators.required],
     })
     this.backrecordform = this.formBuilder.group({
      disease:['',Validators.required],
      description:['',Validators.required],
      date:['',Validators.required],
     })
     this.diagnosticform = this.formBuilder.group({
      initdate:['',Validators.required],
      finishdate:['',Validators.required],
      indicationtext:['',Validators.required],
     })
     this.treatmentform = this.formBuilder.group({
      initdate:['',Validators.required],
      finishdate:['',Validators.required],
      doses:['',Validators.required],
      type:['',Validators.required],
      description:['',Validators.required],
      medicine:['',Validators.required],
     })
     
     this.displayvigilancy = false;
  }

  RegisterMethod(){
    const dialogRef = this.dialog.open(ResultDialogRecordComponent)
  }

  SaveAncient(){
    const dialogRef = this.dialog.open(ResultDialogAncientComponent)
  }

  SaveClinicManagement(){
    const dialogRef = this.dialog.open(ResultDialogClinicComponent)
  }

  SaveTreatment(){
    const dialogRef = this.dialog.open(ResultDialogTreatmentComponent)
  }

  DisplayVigilancy(){
    if(this.displayvigilancy == true){
      this.displayvigilancy = false;
    }else{
      this.displayvigilancy = true;
    }
  }

}
