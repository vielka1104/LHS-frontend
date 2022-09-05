import { Component, OnInit } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { DialogUpdateDataComponent } from '../../dialogs/dialog-update-data/dialog-update-data.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update-record',
  templateUrl: './update-record.component.html',
  styleUrls: ['./update-record.component.css']
})
export class UpdateRecordComponent implements OnInit {

  displayinfo!:boolean;
  displaydiagnostic!:boolean;
  displaytreatment!:boolean;
  displaydata!:boolean;
  updatepersonaldata!:FormGroup;
  updatediagnostic!:boolean;
  updatetreatment!:boolean;
  
  constructor(private formBuilder:FormBuilder, public dialog:MatDialog) { }

  ngOnInit() {
    this.updatepersonaldata=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      dni:['',Validators.required],
      phone:['',Validators.required],
     })
     this.updatediagnostic = false;
     this.updatetreatment = false;
  }

  DisplayInfo(){
    if(this.displayinfo == true){
      this.displayinfo = false;
    }else{
      this.displayinfo = true;
    }
  }

  DisplayDiagnostic(){
    if(this.displaydiagnostic == true){
      this.displaydiagnostic = false;
    }else{
      this.displaydiagnostic = true;
    }
  }

  DisplayTreatment(){
    if(this.displaytreatment == true){
      this.displaytreatment = false;
    }else{
      this.displaytreatment = true;
    }
  }

  DisplayData(){
    if(this.displaydata == true){
      this.displaydata = false;
    }else{
      this.displaydata = true;
    }
  }

  UpdateDataMethod(){
    const dialogRef = this.dialog.open(DialogUpdateDataComponent)
  }

  UpdateDiagnostic(){
      this.updatediagnostic = true;
  }
  FinishUpdateDiagnostic(){
    const dialogRef = this.dialog.open(DialogUpdateDataComponent)
    this.updatediagnostic = false;
  }
  
  UpdateTreatment(){
    this.updatetreatment = true
  }

  FinishUpdateTreatment(){
    const dialogRef = this.dialog.open(DialogUpdateDataComponent)
    this.updatetreatment = false;
  }

}
