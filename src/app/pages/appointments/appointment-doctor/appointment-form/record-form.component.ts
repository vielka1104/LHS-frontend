import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogRecordComponent } from '../../../dialogs/result-dialog-record/result-dialog-record.component';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { ResultDialogAncientComponent } from 'src/app/pages/dialogs/result-dialog-ancient/result-dialog-ancient.component';
import { ResultDialogClinicComponent } from 'src/app/pages/dialogs/result-dialog-clinic/result-dialog-clinic.component';
import { ResultDialogTreatmentComponent } from 'src/app/pages/dialogs/result-dialog-treatment/result-dialog-treatment.component';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

export interface Ancient{
  code: string
  description: string
  diseasetype:string
  date:string
  observation:string
}

export interface Diagnostic{
  code: string
  description: string
  diagnostic:string
  initdate:string
  finishdate:string
}

export interface Treatment{
  code: string
  doses:number
  medicine:string
  description: string
  typetreatment:string
  initdate:string
  finishdate:string
}

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
  fechaactual:Date = new Date()
  pipedate:DatePipe = new DatePipe("en-US")
  todaydate:any
  dataSource = new MatTableDataSource<any>();
  dataSourcediagnostic = new MatTableDataSource<any>()
  dataSourcetreatment = new MatTableDataSource<any>()

  displayedColumns: string[] = ['code', 'description', 'diseasetype', 'date','observation'];
  displayedColumnsdiagnostic: string[] = ['code', 'description', 'diagnostic', 'initdate','finishdate'];
  displayedColumnstreatment: string[] = ['code', 'typetreatment', 'medicine', 'doses','description','initdate','finishdate'];
  

  ancienttest:Ancient = {code: "B12", description:"Hipertensión arterial", diseasetype:"Accord", date:"12/02/2022", observation:""};
  ancienttest2:Ancient = {code: "B13", description:"Diabetes Mellitus", diseasetype:"Camry", date:"12/02/2021", observation:"Cada 12 horas"};
  ancienttest3:Ancient = {code: "A34", description:"Obesidad mórbida", diseasetype:"Elantra", date:"15/02/2021", observation:"Cada 10 horas"};
  ancientlist:Ancient[] = []
  
  diagnostictest:Diagnostic = {code: "B12", description:"diagnostic 1", diagnostic:"diagnostic 1", initdate:"12/02/2022", finishdate:"12/03/2022"};
  diagnostictest2:Diagnostic = {code: "B13", description:"diagnostic 2", diagnostic:"diagnostic 2", initdate:"12/02/2021", finishdate:"12/03/2021"};
  diagnostictest3:Diagnostic = {code: "A34", description:"diagnostic 3", diagnostic:"diagnostic 3", initdate:"15/02/2021", finishdate:"15/03/2021"};
  diagnosticlist:Diagnostic[] = []
  
  treatmenttest:Treatment = {code: "B12", typetreatment:"treatment 1", medicine:"medicine 1", doses: 1, description:"a description 1", initdate: "20/02/2022", finishdate: "20/03/2022"};
  treatmenttest2:Treatment = {code: "B13", typetreatment:"treatment 2", medicine:"medicine 2", doses: 2, description:"a description 2",initdate: "20/02/2022", finishdate: "20/03/2022"};
  treatmenttest3:Treatment = {code: "A34", typetreatment:"treatment 3", medicine:"medicine 3", doses: 3, description:"a description 3",initdate: "20/02/2022", finishdate: "20/03/2022"};
  treatmentlist:Treatment[] = []

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
     this.todaydate = this.pipedate.transform(this.fechaactual, 'dd/MM/yyyy');

     this.ancientlist.push(this.ancienttest)
     this.ancientlist.push(this.ancienttest2)
     this.ancientlist.push(this.ancienttest3)

     this.diagnosticlist.push(this.diagnostictest)
     this.diagnosticlist.push(this.diagnostictest2)
     this.diagnosticlist.push(this.diagnostictest3)
     
     this.treatmentlist.push(this.treatmenttest)
     this.treatmentlist.push(this.treatmenttest2)
     this.treatmentlist.push(this.treatmenttest3)

     this.dataSource.data = this.ancientlist
     this.dataSourcediagnostic.data = this.diagnosticlist
     this.dataSourcetreatment.data = this.treatmentlist

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
