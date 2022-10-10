import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogRecordComponent } from '../../../dialogs/result-dialog-record/result-dialog-record.component';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { ResultDialogAncientComponent } from 'src/app/pages/dialogs/result-dialog-ancient/result-dialog-ancient.component';
import { ResultDialogClinicComponent } from 'src/app/pages/dialogs/result-dialog-clinic/result-dialog-clinic.component';
import { ResultDialogTreatmentComponent } from 'src/app/pages/dialogs/result-dialog-treatment/result-dialog-treatment.component';
import { DatePipe, formatDate } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from 'src/app/services/patient/patient.service';
import { PatientResource } from 'src/app/models/patient/PatientResource';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveillanceService } from 'src/app/services/surveillance/surveillance.service';
import { SurveillanceResource } from 'src/app/models/surveillance/SurveillanceResource';
import { IllnessRecordService } from 'src/app/services/ehr/illness-record.service';
import { IllnessRecordResource } from 'src/app/models/illness-record/IllnessRecordResource';
import { PatientDiagnosticService } from 'src/app/services/ehr/patient-diagnostic.service';
import { DiagnosisResource } from 'src/app/models/diagnostic/DiagnosisResource';
import { DiagnosticService } from 'src/app/services/ehr/diagnostic.service';
import { CreatePatientDiagnosisResource } from 'src/app/models/patient-diagnostic/CreatePatientDiagnosisResource';
import { PatientTreatmentResource } from 'src/app/models/patient-treatment/PatientTreatmentResource';
import { TreatmentResource } from 'src/app/models/treatment/TreatmentResource';
import { MedicineResource } from 'src/app/models/medicine/MedicineResource';
import { PatientTreatmentService } from 'src/app/services/ehr/patient-treatment.service';
import { TreatmentService } from 'src/app/services/ehr/treatment.service';
import { MedicineService } from 'src/app/services/ehr/medicine.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { DoctorResource } from 'src/app/models/doctor/DoctorResource';
import { StaffService } from 'src/app/services/staff/staff.service';
import { PatientDiagnosisResource } from 'src/app/models/patient-diagnostic/PatientDiagnosisResource';
import { UpdateDiagnosticDialogComponent } from '../../update-dialog/update-diagnostic-dialog/update-diagnostic-dialog.component';
import { UpdateTreatmentDialogComponent } from '../../update-dialog/update-treatment-dialog/update-treatment-dialog.component';
import { UpdatePatientResource } from 'src/app/models/patient/UpdatePatientResource';
import { RenalDiseaseResource } from 'src/app/models/renal-disease/RenalDiseaseResource';
import { UpdateRenalDiseaseResource } from 'src/app/models/renal-disease/UpdateRenalDiseaseResource';
import { RenalDiseaseService } from 'src/app/services/patient/renal-disease.service';
import { PredictionService } from 'src/app/services/prediction/prediction.service';
import { PredictionResource } from 'src/app/models/prediction/PredictionResource';
import { ResultPrediction } from 'src/app/models/prediction/ResultResource';
@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit {
  patientobject!:PatientResource
  doctorobject!:DoctorResource
  doctorurlobject!:DoctorResource
  idpatienturl!:number
  iddoctorurl!:number
  patientupdate!:UpdatePatientResource
  surveillancepatient!:SurveillanceResource
  surveillancepatientobject!:SurveillanceResource
  ancientpatient!:IllnessRecordResource
  patientdiagnostic!:CreatePatientDiagnosisResource
  patientdiagnosispredictive!:PatientDiagnosisResource
  diagnosis!:DiagnosisResource
  patienttreatment!:PatientTreatmentResource
  treatment!:TreatmentResource
  patientmedicine!:MedicineResource
  patientrecordform!:FormGroup
  displayvigilancy!:boolean
  backrecordform!:FormGroup
  diagnosticform!:FormGroup
  treatmentform!:FormGroup
  renalform!:FormGroup
  dialisisform!:FormGroup
  treatmenttype!:String;
  predictionobj!:PredictionResource
  treatmenttypes:TreatmentResource[] = []
  diagnostictypes:DiagnosisResource[] = []
  renaltypes:RenalDiseaseResource[] = []
  medicinetypes:MedicineResource[] = []
  fechaactual:Date = new Date()
  pipedate:DatePipe = new DatePipe("en-US")
  todaydate:any
  result!:string
  diagnosisobjectpredictive:DiagnosisResource
  enddatetreatmentformatselected:any
  enddatediagnosticformatselected:any
  renaldiseasetype!:RenalDiseaseResource
  dataSource = new MatTableDataSource<any>();
  dataSourceSurveillance = new MatTableDataSource<any>();
  dataSourceRenalDisease = new MatTableDataSource<any>();
  dataSourcepatientdiagnostic = new MatTableDataSource<any>()
  dataSourcepatientdiagnostic2 = new MatTableDataSource<any>()
  dataSourcepatientdiagnostic3 = new MatTableDataSource<any>()
  dataSourcePrediction = new MatTableDataSource<any>()
  dataSourcediagnostic = new MatTableDataSource<any>()
  dataSourcepatienttreatment = new MatTableDataSource<any>()
  dataSourcepatienttreatment2 = new MatTableDataSource<any>()
  dataSourcetreatment = new MatTableDataSource<any>()
  dataSourcemedicine = new MatTableDataSource<any>()  
  listDiagnosis:PatientDiagnosisResource[] = [] 
  dataSourceancient = new MatTableDataSource<any>()
  dataSourceancient2 = new MatTableDataSource<any>()
  updaterenaldisease!:UpdateRenalDiseaseResource
  displayedColumnsancient: string[] = ['id', 'description', 'diseasetype', 'date'];
  displayedColumnsdiagnostic: string[] = ['code', 'description', 'diagnostic','update'];
  displayedColumnstreatment: string[] = ['code', 'typetreatment', 'medicine', 'doses','description','initdate','finishdate','update'];
  stat!:string;
  notes!:string
  responseprediction!:ResultPrediction
  shecdule!:Date
  status:string[] = ["SCHEDULED","FINISHED","CANCELED"]
  dialysislist:string[] = ["SIN_ESPECIFICAR","CATETER","FISTULA"] 
  setstatfrom!:FormGroup
  descriptiondialisis!:any
  constructor(public dialog:MatDialog, private formBuilder:FormBuilder, 
    private patientservice:PatientService,private activeroute:ActivatedRoute, private route:Router, 
    private surveillanceservice:SurveillanceService,
    private illnesservice:IllnessRecordService,
    private patientdiagnosticservice:PatientDiagnosticService,
    private diagnosisservice:DiagnosticService,
    private patienttreatmentservice:PatientTreatmentService,
    private treatmentservice:TreatmentService,
    private medicineservice:MedicineService,
    private doctorservice:DoctorService,
    private staffservice:StaffService,
    private renaldiseaseservice:RenalDiseaseService,
    private predictionservice:PredictionService,

    ) { 
      this.ancientpatient = {} as IllnessRecordResource,
      this.patientdiagnostic = {} as CreatePatientDiagnosisResource,
      this.diagnosis = {} as DiagnosisResource
      this.patienttreatment = {} as PatientTreatmentResource
      this.treatment = {} as TreatmentResource
      this.patientmedicine = {} as MedicineResource
      this.patientobject = {} as PatientResource
      this.surveillancepatient = {} as SurveillanceResource
      this.patientupdate={}as UpdatePatientResource
      this.renaldiseasetype = {} as RenalDiseaseResource
      this.surveillancepatientobject = {} as SurveillanceResource
      this.predictionobj = {} as PredictionResource
      this.updaterenaldisease = {} as UpdateRenalDiseaseResource
      this.responseprediction = {} as ResultPrediction
    }

  ngOnInit() {
    this.patientrecordform=this.formBuilder.group({
      height:['',Validators.required],
     })

     this.patientrecordform.controls['height'].setValue(this.patientobject.height);

     this.backrecordform = this.formBuilder.group({
      disease:['',Validators.required],
      description:['',Validators.required],
      date:['',Validators.required],
     })
     this.diagnosticform = this.formBuilder.group({
      typediagnostic:['',Validators.required],
     })
     this.treatmentform = this.formBuilder.group({
      initdate:['',Validators.required],
      finishdate:[''],
      doses:['',Validators.required],
      type:['',Validators.required],
      medicine:['',Validators.required],
     })
     this.setstatfrom = this.formBuilder.group({

      stat:['',Validators.required]

     })
     this.renalform = this.formBuilder.group({
      renalname:['',Validators.required]
     })
     this.dialisisform = this.formBuilder.group({
      dialisistype:['']
     })

     this.dialisisform.controls['dialisistype'].setValue(this.patientobject.dialysisMaterial);

     this.displayvigilancy = false;
     this.todaydate = this.pipedate.transform(this.fechaactual, 'dd/MM/yyyy');

     let urlpatientvariable = parseInt(this.activeroute.snapshot.paramMap.get('patientid')!);
     let urldoctorvariable = parseInt(this.activeroute.snapshot.paramMap.get('doctorid')!);
     this.idpatienturl = urlpatientvariable
     this.iddoctorurl = urldoctorvariable
     console.log(this.idpatienturl)
     console.log(this.iddoctorurl)
     this.GetPatientbyId(this.idpatienturl);
     this.GetDoctorbyId(this.iddoctorurl)
     this.getSurveillanceByPatientId(this.idpatienturl);
     this.getPatientAncients(this.idpatienturl)
     this.getPatientAncientssave(this.idpatienturl)
     this.getPatientDiagnostic(this.idpatienturl)
     this.getPatientTreatments(this.idpatienturl)
     this.getPatientTreatmentssave(this.idpatienturl)
     this.getPatientDiagnosticssave(this.idpatienturl)
     this.getDiagnosis()
     this.getTreatments()
     this.getMedicines()
     this.getRenalDiseases()
     this.PredictionData(this.idpatienturl)
  }

  RegisterMethod(){
    const dialogRef = this.dialog.open(ResultDialogRecordComponent)
  }

  SaveAncient(id:number){
    this.illnesservice.createIllnessRecord(this.ancientpatient,id).subscribe( (response:any) =>{
      this.dataSourceancient2.data.push( {...response});
      this.dataSourceancient2.data = this.dataSourceancient2.data.map((o: any) => { return o; });
      const dialogRef = this.dialog.open(ResultDialogAncientComponent)
      this.getPatientAncients(id)
    });
  }
  getDiagnosis(){
    this.diagnosisservice.getAllDiagnosis().subscribe( (response:any) =>{
        this.diagnostictypes = response
        console.log(this.diagnostictypes)
      }
    )
  }

  getRenalDiseases(){
    this.renaldiseaseservice.getAllRenalDisease().subscribe( (response:any) =>{
      this.renaltypes = response
      this.dataSourceRenalDisease.data = response
      console.log(this.renaltypes)
    })
  }

  getTreatments(){
    this.treatmentservice.getAllTreatments().subscribe( (response:any) =>{
        this.treatmenttypes = response
        console.log(this.treatmenttypes)
      }
    )
  }

  getMedicines(){
    this.medicineservice.getAllMedicines().subscribe( (response:any) =>{
        this.medicinetypes = response
        console.log(this.medicinetypes)
      }
    )
  }

  getDiagnosticbyName(diagnosticselected:any){
    console.log(diagnosticselected)
    this.diagnosisservice.getDiagnosisByName(diagnosticselected).subscribe( (response:any) =>{
      this.dataSourcediagnostic.data = response
      console.log(this.dataSourcediagnostic.data)
      this.diagnosis = this.dataSourcediagnostic.data[0]
    })
  }

  getRenalbyName(renalselected:any){
    console.log(renalselected)
    this.renaldiseaseservice.getRenalDiseaseByName(renalselected).subscribe( (response:any) =>{
      console.log(response)
      this.renaldiseasetype = response 
    })
  }
  
  getTreatmentbyName(treatmentselected:any){
    console.log(treatmentselected)
    this.treatmentservice.getTreatmentByName(treatmentselected).subscribe( (response:any) =>{
      this.dataSourcetreatment.data = response
      this.treatment = this.dataSourcetreatment.data[0]
    })
  }

  SaveDiagnostic(id:number){
    console.log(this.diagnosis);
    console.log(this.patientdiagnostic);

    this.diagnosisservice.getDiagnosisByName(this.diagnosis.name).subscribe( (response:any) =>{
        this.dataSourcediagnostic.data = response
        console.log(this.dataSourcediagnostic.data)
        this.diagnosis = this.dataSourcediagnostic.data[0]

        this.patientdiagnosticservice.createPatientDiagnosis(this.patientdiagnostic,id,this.diagnosis.id).subscribe( (response:any) =>{
            this.dataSourcepatientdiagnostic2.data.push( {...response});
            this.dataSourcepatientdiagnostic2.data = this.dataSourcepatientdiagnostic2.data.map((o: any) => { return o; });
            const dialogRef = this.dialog.open(ResultDialogClinicComponent)
            this.getPatientDiagnostic(id)
            this.PredictionData(id)
          },err=>{
            alert("Diagnostico seleccionado igual")
          }
        )
      }
    )
    
  }

  SaveTreatment(id:number){
    console.log(this.patientmedicine);
    console.log(this.treatment);
    console.log(this.patienttreatment);

    this.medicineservice.getMedicineByName(this.patientmedicine.name).subscribe( (responsemedicine:any) =>{
      this.dataSourcemedicine.data = responsemedicine
      this.patientmedicine = this.dataSourcemedicine.data[0]
      console.log(this.patientmedicine)

      this.treatmentservice.getTreatmentByName(this.treatment.name).subscribe( (responsetreatment:any) =>{
            this.dataSourcetreatment.data = responsetreatment
            this.treatment = this.dataSourcetreatment.data[0]
            console.log(this.treatment)

            this.patienttreatmentservice.createPatientTreatment(id,this.treatment.id,this.patientmedicine.id,this.patienttreatment).subscribe( (responsepatienttreatment:any) =>{
                this.dataSourcepatienttreatment2.data.push( {...responsepatienttreatment});
                console.log(responsepatienttreatment)
                this.dataSourcepatienttreatment2.data = this.dataSourcepatienttreatment2.data.map((o: any) => { return o; });
                const dialogRef = this.dialog.open(ResultDialogTreatmentComponent)
                this.getPatientTreatments(id)
            },err=>{
              alert("Tratamiento seleccionado igual")
              }
            )
          })
      });

    
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

  GetDoctorbyId(id:number){
    this.doctorservice.getDoctorById(id).subscribe( (response:any) =>{
        this.doctorobject = response
        console.log(this.doctorobject)
      }
    )
  }

  UpdatePatient(id:number){
    console.log(this.patientobject.height)

    this.patientservice.getPatientById(id).subscribe((response:PatientResource) =>{
        console.log(response.birthday)
        this.patientupdate.birthday = response.birthday
        this.patientupdate.documentType = response.documentType
        this.patientupdate.email = response.email
        this.patientupdate.gender= response.gender
        this.patientupdate.lastname= response.lastname
        this.patientupdate.name= response.name
        this.patientupdate.phone= response.phone
        this.patientupdate.username= response.username
        this.patientupdate.password= response.password 
        this.patientupdate.height = this.patientobject.height
        
        this.patientupdate.documentNumber = response.documentNumber
        console.log(this.patientupdate)

        this.patientservice.updatePatient(id,this.patientupdate).subscribe( (response:any) =>{
            this.dataSource.data = this.dataSource.data.map((o: PatientResource) => {
              console.log(response)
              if (o.id === response.id) {
                o = response;
              }
              return o;
            });
        });

    });
  }

  getSurveillanceByPatientId(id:number){
    console.log(this.surveillancepatient)
    console.log(this.surveillancepatient.planCalories)
    this.surveillanceservice.getSurveillanceByPatientId(id).subscribe( (response:any) => {  
        this.dataSourceSurveillance.data = response
        console.log(this.dataSourceSurveillance.data)
        let finalposition = this.dataSourceSurveillance.data.length - 1
        this.surveillancepatient = this.dataSourceSurveillance.data[finalposition]
        
        console.log(this.surveillancepatient)
      }
    );   
  }

  getPatientAncients(id:number){
    this.illnesservice.getIllnessRecordsByPatientId(id).subscribe( (response:any) =>{
        this.dataSourceancient.data = response
        console.log(this.dataSourceancient.data)

        for(var oneancient of this.dataSourceancient.data){
          let dateformatselected = formatDate(oneancient.date,'YYYY-MM-dd','en_US')
          
          oneancient.date = dateformatselected
        }
      }
    );
  }
  
  getPatientAncientssave(id:number){
    this.illnesservice.getIllnessRecordsByPatientId(id).subscribe( (response:any) =>{
        this.dataSourceancient2.data = response
        console.log(this.dataSourceancient2.data)
      }
    );
  }

  getPatientDiagnostic(id:number){
    this.patientdiagnosticservice.getPatientDiagnosisByPatientId(id).subscribe( (response:any) => {
        this.dataSourcepatientdiagnostic.data = response
        console.log(this.dataSourcepatientdiagnostic.data)
        
        for(var onediagnostic of this.dataSourcepatientdiagnostic.data){
          console.log(onediagnostic)
          let startdateformatselected = formatDate(onediagnostic.startDate,'YYYY-MM-dd','en_US')
          
          if(onediagnostic.endDate != null){
            this.enddatediagnosticformatselected = formatDate(onediagnostic.endDate,'YYYY-MM-dd','en_US') 
          }
          else{
            this.enddatediagnosticformatselected = null
          }
          
          onediagnostic.startDate = startdateformatselected
          onediagnostic.endDate = this.enddatediagnosticformatselected
        }
      }

    )
  }

  getPatientTreatments(id:number){
    this.patienttreatmentservice.getPatientTreatmentByPatientId(id).subscribe( (response:any) =>{
        this.dataSourcepatienttreatment.data = response
        console.log(this.dataSourcepatienttreatment.data)

        for(var onetreatment of this.dataSourcepatienttreatment.data){
          let startdateformatselected = formatDate(onetreatment.startDate,'YYYY-MM-dd','en_US')
          if(onetreatment.endDate != null){
            this.enddatetreatmentformatselected = formatDate(onetreatment.endDate,'YYYY-MM-dd','en_US') 
          }
          else{
            this.enddatetreatmentformatselected = null
          }
            
          onetreatment.startDate = startdateformatselected
          onetreatment.endDate = this.enddatetreatmentformatselected
        }
      }
    )
  }
  getPatientTreatmentssave(id:number){
    this.patienttreatmentservice.getPatientTreatmentByPatientId(id).subscribe( (response:any) =>{
        this.dataSourcepatienttreatment2.data = response
        console.log(this.dataSourcepatienttreatment2.data)
      }
    )
  }

  getPatientDiagnosticssave(id:number){
    this.patientdiagnosticservice.getPatientDiagnosisByPatientId(id).subscribe( (response:any) => {
      this.dataSourcepatientdiagnostic2.data = response
      console.log(this.dataSourcepatientdiagnostic2.data)
    })
  }

  GoToAppointmentDoctor(){
      this.route.navigate(['doctor',this.doctorobject.id,'profiles']);
  }

  GotoUpdateDiagnostic(object:PatientDiagnosisResource){
    const dialogRef=  this.dialog.open(UpdateDiagnosticDialogComponent,{
      data:object 
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      
      this.patientdiagnosticservice.updatePatientDiagnosis(result.id,result).subscribe( (response:any) =>{
        this.dataSourcepatientdiagnostic2.data = this.dataSourcepatientdiagnostic2.data.map((o: PatientDiagnosisResource) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });

      });

    });
  }

  GotoUpdateTreatment(object:PatientTreatmentResource){
    const dialogRef=  this.dialog.open(UpdateTreatmentDialogComponent,{
      data:object 
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)

      this.patienttreatmentservice.updatePatientTreatment(result.id,result).subscribe( (response:any) =>{
        this.dataSourcepatienttreatment2.data = this.dataSourcepatienttreatment2.data.map((o: PatientTreatmentResource) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });

      });

    });
  }

  UpdateRenalDisease(){
    console.log(this.renaldiseasetype)
    this.renaldiseaseservice.getRenalDiseaseByName(this.renaldiseasetype.name).subscribe( (response:any) =>{
      console.log(response)
      this.renaldiseasetype = response 
      this.patientservice.updatePatientbyRenalDisease(this.patientobject.id,this.renaldiseasetype.id,this.patientobject).subscribe( (updateresponse:any) =>{
        this.dataSource.data = this.dataSource.data.map((o: PatientResource) => {
          if (o.id === updateresponse.id) {
            o = updateresponse;
          }
          return o;
        });

      });
       
    })
  }

  PutDialisis(){
    console.log(this.patientobject.dialysisMaterial)

    this.patientservice.getPatientById(this.patientobject.id).subscribe((response:PatientResource) =>{

        this.patientupdate.birthday = response.birthday
        this.patientupdate.documentType = response.documentType
        this.patientupdate.email = response.email
        this.patientupdate.gender= response.gender
        this.patientupdate.lastname= response.lastname
        this.patientupdate.name= response.name
        this.patientupdate.phone= response.phone
        this.patientupdate.username= response.username
        this.patientupdate.password= response.password 
        this.patientupdate.height = response.height
        this.patientupdate.dialysisMaterial = this.patientobject.dialysisMaterial
        
        this.patientupdate.documentNumber = response.documentNumber
        console.log(this.patientupdate)

        this.patientservice.updatePatient(this.patientobject.id,this.patientupdate).subscribe( (response:any) =>{
            console.log(response)
            this.dataSource.data = this.dataSource.data.map((o: PatientResource) => {
              if (o.id === response.id) {
                o = response;
              }
              return o;
            });
        });

    });
  }

  PredictionData(id:number){
    this.surveillanceservice.getSurveillanceByPatientId(id).subscribe( (response:any) => {
      let prediction: PredictionResource = new PredictionResource()
      this.dataSourceSurveillance.data = response
      console.log(this.dataSourceSurveillance.data)
      let finalposition = this.dataSourceSurveillance.data.length - 1
      this.surveillancepatientobject = this.dataSourceSurveillance.data[finalposition]
      console.log(this.surveillancepatientobject)
      
      this.patientdiagnosticservice.getPatientDiagnosisByPatientId(id).subscribe( (response:any) => {
        this.dataSourcepatientdiagnostic3.data = response
        console.log(this.dataSourcepatientdiagnostic3.data)
        /*let finalposition2 = this.dataSourcepatientdiagnostic3.data.length - 1
        this.patientdiagnosispredictive = this.dataSourcepatientdiagnostic3.data[finalposition2]
        console.log(this.patientdiagnosispredictive)*/
        for(let i= 0; i< this.dataSourcepatientdiagnostic3.data.length;i++){
          this.diagnosisservice.getDiagnosisById(this.dataSourcepatientdiagnostic3.data[i].diagnosis.id).subscribe( (response:any) => {
            this.diagnosisobjectpredictive = response
            console.log("here diagnosis")
            console.log(this.dataSourcepatientdiagnostic3.data)
            if(this.diagnosisobjectpredictive.id == 1){
              console.log("Entra a if de hipertension")
              prediction.hypertension = true
            }

            if(this.diagnosisobjectpredictive.id == 2){
              prediction.diabetes_mellitus = true
            }

            if(this.diagnosisobjectpredictive.id == 3){
              prediction.coronary_artery_disease = true
            }

            if(this.diagnosisobjectpredictive.id == 4){
              prediction.anemia = true
            }

            if(this.diagnosisobjectpredictive.id == 5){
              prediction.pedal_edema = true
            }
            console.log(prediction)
          })
        }
        this.patientservice.getPatientById(id).subscribe( (response:PatientResource) => {
          const now = new Date().getFullYear()
          const patientYears = response.birthday
          let years = patientYears.toString().slice(0,4)
          prediction.age = now - Number(years)
        })
        prediction.blood_pressure = this.surveillancepatientobject.bloodPressure
        prediction.specific_gravity = this.surveillancepatientobject.specificGravity
        prediction.albumin = this.surveillancepatientobject.albumin
        prediction.sugar = this.surveillancepatientobject.sugar
        prediction.red_blood_cells = this.surveillancepatientobject.redBloodCells
        prediction.pus_cell = this.surveillancepatientobject.pusCells
        prediction.pus_cell_clumps = this.surveillancepatientobject.pusCellClumps
        prediction.bacteria = this.surveillancepatientobject.bacteria
        prediction.blood_glucose_random = this.surveillancepatientobject.bloodGlucoseRandom
        prediction.blood_urea = this.surveillancepatientobject.bloodUrea
        prediction.serum_creatinine = this.surveillancepatientobject.serumCreatinine
        prediction.sodium = this.surveillancepatientobject.sodium
        prediction.potassium = this.surveillancepatientobject.potassium
        prediction.hemoglobin = this.surveillancepatientobject.hemoglobin
        prediction.packed_cell_volume = this.surveillancepatientobject.packedCellVolume
        prediction.white_blood_cell_count = this.surveillancepatientobject.whiteBloodCellCount
        prediction.red_blood_cell_count = this.surveillancepatientobject.redBloodCellCount
        prediction.appetite = this.surveillancepatientobject.appetite
        
        console.log(prediction)
        console.log("here")
        this.predictionservice.createPrediction(prediction).subscribe( (response:any) => {
          this.responseprediction = response
          console.log(this.responseprediction)
          if(this.responseprediction.outcome == 1){
            this.result = "Si"
          }else{
            this.result = "No"
          }
          
        })
      });
    
    });  

  }
}
