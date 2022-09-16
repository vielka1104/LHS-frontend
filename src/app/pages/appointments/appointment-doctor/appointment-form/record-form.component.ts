import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogRecordComponent } from '../../../dialogs/result-dialog-record/result-dialog-record.component';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { ResultDialogAncientComponent } from 'src/app/pages/dialogs/result-dialog-ancient/result-dialog-ancient.component';
import { ResultDialogClinicComponent } from 'src/app/pages/dialogs/result-dialog-clinic/result-dialog-clinic.component';
import { ResultDialogTreatmentComponent } from 'src/app/pages/dialogs/result-dialog-treatment/result-dialog-treatment.component';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from 'src/app/services/patient/patient.service';
import { PatientResource } from 'src/app/models/patient/PatientResource';
import { ActivatedRoute } from '@angular/router';
import { SurveillanceService } from 'src/app/services/surveillance/surveillance.service';
import { SurveillanceResource } from 'src/app/models/surveillance/SurveillanceResource';
import { IllnessRecordService } from 'src/app/services/ehr/illness-record.service';
import { IllnessRecordResource } from 'src/app/models/illness-record/IllnessRecordResource';
import { PatientDiagnosticService } from 'src/app/services/ehr/patient-diagnostic.service';
import { PatientDiagnosisResource } from 'src/app/models/patient-diagnostic/PatientDiagnosisResource';
import { DiagnosisResource } from 'src/app/models/diagnostic/DiagnosisResource';
import { DiagnosticService } from 'src/app/services/ehr/diagnostic.service';
import { CreatePatientDiagnosisResource } from 'src/app/models/patient-diagnostic/CreatePatientDiagnosisResource';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit {
  patientheight!:any
  patientobject!:PatientResource
  idurl!:number
  patientupdate!:PatientResource
  surveillancepatient!:SurveillanceResource
  ancientpatient!:IllnessRecordResource
  patientdiagnostic!:CreatePatientDiagnosisResource
  diagnosis!:DiagnosisResource
  diagnosissaved!:DiagnosisResource
  patientrecordform!:FormGroup
  displayvigilancy!:boolean
  backrecordform!:FormGroup
  diagnosticform!:FormGroup
  treatmentform!:FormGroup
  treatmenttype!:String;
  treatmenttypes:String[] = ["Treatment 1","Treatment 2","Treatment 3"]
  diagnostictypes:String[] = ["Diabetes 1","Diabetes 2","Calculos renales"]
  fechaactual:Date = new Date()
  pipedate:DatePipe = new DatePipe("en-US")
  todaydate:any
  dataSource = new MatTableDataSource<any>();
  dataSourceSurveillance = new MatTableDataSource<any>();
  dataSourcepatientdiagnostic = new MatTableDataSource<any>()
  dataSourcediagnostic = new MatTableDataSource<any>()
  dataSourcetreatment = new MatTableDataSource<any>()
  dataSourceancient = new MatTableDataSource<any>()
  displayedColumnsancient: string[] = ['id', 'description', 'diseasetype', 'date'];
  displayedColumnsdiagnostic: string[] = ['code', 'description', 'diagnostic', 'initdate','finishdate'];
  displayedColumnstreatment: string[] = ['code', 'typetreatment', 'medicine', 'doses','description','initdate','finishdate'];
  

  constructor(public dialog:MatDialog, private formBuilder:FormBuilder, 
    private patientservice:PatientService,private route:ActivatedRoute, private surveillanceservice:SurveillanceService,
    private illnesservice:IllnessRecordService,
    private patientdiagnosticservice:PatientDiagnosticService,
    private diagnosisservice:DiagnosticService
    ) { 
      this.ancientpatient = {} as IllnessRecordResource,
      this.patientdiagnostic = {} as CreatePatientDiagnosisResource,
      this.diagnosis = {} as DiagnosisResource
    }

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
      typediagnostic:['',Validators.required],
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

     let urlvariable = parseInt(this.route.snapshot.paramMap.get('id')!);
     this.idurl = urlvariable
     console.log(this.idurl)
     this.GetPatientbyId(this.idurl);
     this.getSurveillanceByPatientId(this.idurl);
     this.getPatientAncients(this.idurl)
     this.getPatientDiagnostic(this.idurl)

  }

  RegisterMethod(){
    const dialogRef = this.dialog.open(ResultDialogRecordComponent)
  }

  SaveAncient(id:number){
    this.illnesservice.createIllnessRecord(this.ancientpatient,id).subscribe( (response:any) =>{
      this.dataSourceancient.data.push( {...response});
      this.dataSourceancient.data = this.dataSourceancient.data.map((o: any) => { return o; });
    });

    const dialogRef = this.dialog.open(ResultDialogAncientComponent)
  }

  SaveDiagnostic(id:number){
    console.log(this.diagnosis);
    console.log(this.patientdiagnostic);

    this.diagnosisservice.createDiagnosis(this.diagnosis).subscribe( (response:any) =>{
        this.dataSourcediagnostic.data.push( {...response});
        console.log(response)
        this.dataSourcediagnostic.data = this.dataSourcediagnostic.data.map((o: any) => { return o;});

        this.patientdiagnosticservice.createPatientDiagnosis(this.patientdiagnostic,id,response.id).subscribe( (response:any) =>{
            this.dataSourcepatientdiagnostic.data.push( {...response});
            this.dataSourcepatientdiagnostic.data = this.dataSourcepatientdiagnostic.data.map((o: any) => { return o; });
          }
        )
      }
    )
    
    const dialogRef = this.dialog.open(ResultDialogClinicComponent)
  }

  SaveDiagnosis(){
    this.diagnosisservice.createDiagnosis(this.diagnosis).subscribe( (response:any) =>{
      this.dataSourcediagnostic.data.push( {...response});
      console.log(response)
      this.dataSourcediagnostic.data = this.dataSourcediagnostic.data.map((o: any) => { return o;});
      }
    )

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

  GetPatientbyId(id:number){
    this.patientservice.getPatientById(id).subscribe( (response:any) =>{
        this.patientobject = response
        console.log(this.patientobject)
      }
    )
  }

  UpdatePatient(id:number){
    console.log(this.patientheight)
    
    this.patientservice.getPatientById(id).subscribe((response:any) =>{
        this.patientupdate = response
        this.patientupdate.height = this.patientheight

        this.patientservice.updatePatient(id,this.patientupdate).subscribe( (response:any) =>{
            this.dataSource.data = this.dataSource.data.map((o: PatientResource) => {
              if (o.id === response.id) {
                o = response;
              }
              return o;
            });
        });

        console.log(this.patientupdate)
    });
  }

  getSurveillanceByPatientId(id:number){
    this.surveillanceservice.getSurveillanceByPatientId(id).subscribe( (response:any) => {
        this.dataSourceSurveillance.data = response
        console.log(this.dataSourceSurveillance.data)
        this.surveillancepatient = this.dataSourceSurveillance.data[0]
        console.log(this.surveillancepatient)
      }
    );   
  }

  getPatientAncients(id:number){
    this.illnesservice.getIllnessRecordsByPatientId(id).subscribe( (response:any) =>{
        this.dataSourceancient.data = response
        console.log(this.dataSourceancient.data)
      }
    );
  }

  getPatientDiagnostic(id:number){
    this.patientdiagnosticservice.getPatientDiagnosisByPatientId(id).subscribe( (response:any) => {
        this.dataSourcepatientdiagnostic.data = response
        console.log(this.dataSourcepatientdiagnostic.data)
      }

    )
  }
}
