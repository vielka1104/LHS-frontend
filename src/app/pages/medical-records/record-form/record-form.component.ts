import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogRecordComponent } from '../../dialogs/result-dialog-record/result-dialog-record.component';
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
  displayinfo!:boolean
  displayback!:boolean
  displayclinic!:boolean
  displaytreatment!:boolean
  backrecordform!:FormGroup
  clinicform!:FormGroup
  treatmentform!:FormGroup

  constructor(public dialog:MatDialog, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.patientrecordform=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      dni:['',Validators.required],
      phone:['',Validators.required],
     })
     this.backrecordform = this.formBuilder.group({
      diagnostic:['',Validators.required]
     })
     this.clinicform = this.formBuilder.group({
      weight:['',Validators.required],
      height:['',Validators.required],
      imc:['',Validators.required],
      indicationtext:['',Validators.required],
      erc:['',Validators.required],
     })
     this.treatmentform = this.formBuilder.group({
      medication:['',Validators.required],
      doses:['',Validators.required],
      indication:['',Validators.required]
     })
     this.displayinfo = false;
     this.displayback = false;
     this.displayclinic = false;
     this.displaytreatment = false;
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

  DisplayInfoPatient(){
    if(this.displayinfo == true){
      this.displayinfo = false;
    }else{
      this.displayinfo = true;
    }
  }

  DisplayBackrecords(){
    if(this.displayback == true){
      this.displayback = false;
    }else{
      this.displayback = true;
    }
  }

  DisplayClinicMethod(){
    if(this.displayclinic == true){
      this.displayclinic = false;
    }else{
      this.displayclinic = true;
    }
  }

  DisplayTreatmentMethod(){
    if(this.displaytreatment == true){
      this.displaytreatment = false;
    }else{
      this.displaytreatment = true;
    }
  }

}
