import { ActivatedRoute } from '@angular/router';
import { SurveillanceResource } from 'src/app/models/surveillance/SurveillanceResource';
import { DoctorResource } from './../../models/doctor/DoctorResource';
import { SurveillanceService } from './../../services/surveillance/surveillance.service';
import { AppointmentService } from './../../services/appoinment/Appointment.service';
import { PatientDiagnosticService } from './../../services/ehr/patient-diagnostic.service';
import { PatientTreatmentService } from './../../services/ehr/patient-treatment.service';
import { IllnessRecordService } from './../../services/ehr/illness-record.service';
import { PatientResource } from 'src/app/models/patient/PatientResource';
import { PatientService } from './../../services/patient/patient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DiagnosticoPaciente } from './../../models/DiagnosticoPaciente';
import { Medicamento } from './../../models/Medicamento';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Antecedente } from 'src/app/models/Antecedente';
import { Paciente } from 'src/app/models/Paciente';
import { Tratamiento } from 'src/app/models/Tratamiento';
import { Diagnostico } from 'src/app/models/Diagnostico';
import { Cita } from 'src/app/models/Cita';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

const date=new Date()
const paciente:Paciente[]=[
  { id:1,
    nombres:"person",
    apellidos:"lastaname",
    nacimiento: date,
    sexo:"M",
    telefono:"444355",
    direccion:"casa",
    username:"user",
    password:"pass",
    tipodoc:"DNI",
    nrodocumento:"5456664",
    altura:1.70,
  }
]
const antecedente:Antecedente[]=[
  {
    id:1,
    enfermedad:"toz",
    descripcion:"enfermedad",
    fecha:date,
    paciente_id:paciente[1],
  }
]
const medicamento:Medicamento[]=[
  {
    id:1,
    nombre:"medicamento 1"
  }
]
const tratamiento:Tratamiento[]=[
  {
    id:1,
    fechaInicio:date,
    fechaFin:date,
    dosis:12,
    paciente_id:paciente[0],
    medicamento_id:medicamento[0],
  }
]
const diagnostico:Diagnostico[]=[
  {
    id:1,
    tipo:"tipo 1",
    descripcion:"diagnostico",
  }
]
const DiagnosticoPaciente:DiagnosticoPaciente[]=[
  {
    id:1,
   fechaInicio:date,
   fechaFin:date,
   paciente_id:paciente[0],
   diagnostico_id:diagnostico[0],
  }
]
const cita:Cita[]=[
  {
    id:1,
notas:"notas",
paciente_id:paciente[1]
  }
]
@Component({
  selector: 'app-clinical-histories',
  templateUrl: './clinical-histories.component.html',
  styleUrls: ['./clinical-histories.component.css']
})

export class ClinicalHistoriesComponent implements OnInit {
  public DNIform!:FormGroup;
  DNI!:string
  dataSource1 !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  dataSource3 !:MatTableDataSource<any>;
  dataSource4 !:MatTableDataSource<any>;
  dataSource5 !:MatTableDataSource<any>;
  dataSourcea=antecedente
  avalible!:boolean
  dataSourceb=tratamiento
  dataSourcec=DiagnosticoPaciente
  dataSourced=cita
  DoctorResource!:DoctorResource;
  Patient!:PatientResource;
  SurveillanceResource1!:SurveillanceResource
  displayedColumns: string[] =  ['Antecedente', 'Descripcion', 'fecha'];
  displayedColumns2: string[] = ['Medicamento', 'Dosis Diarias', 'fecha inicio','fecha final'];
  displayedColumns3: string[] = ['Diagnostico', 'Fecha', 'Comentario'];
  displayedColumns4: string[] = ['Fecha','Notas'];
  constructor(public dialog: MatDialog,private formBuilder:FormBuilder,private PATIENTSERVICE:PatientService,private IllnessRecordService:IllnessRecordService
    ,private PatientTreatmentService:PatientTreatmentService,private PatientDiagnosticService:PatientDiagnosticService,private AppointmentService:AppointmentService,private SurveillanceService:SurveillanceService
    ,private DoctorService:DoctorService,private ActivatedRoute:ActivatedRoute) { 
    this.dataSource1 = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
    this.dataSource3 = new MatTableDataSource<any>();
    this.dataSource4 = new MatTableDataSource<any>();
    this.dataSource5 = new MatTableDataSource<any>();
    this.Patient={}as PatientResource
    this.SurveillanceResource1={}as SurveillanceResource
    
    this.avalible=false
     
  }

  ngOnInit() {
    let doctorid=parseInt(this.ActivatedRoute.snapshot.paramMap.get('id')!)
    this.DNIform=this.formBuilder.group({
      dni:['',[Validators.required,Validators.minLength(8)]],
     
 
      })
      this.findDoctor(doctorid)
  }
  
  findDoctor(id:number){
    this.DoctorService.getDoctorById(id).subscribe((response:any)=>{
               this.DoctorResource=response           
    })
}











  onSubmitDNI(){
    this.PATIENTSERVICE.getPatientByDocumentNumber(this.DNI).subscribe((response:any)=>{
      this.Patient=response;
      this.avalible=true
      console.log(this.Patient) 
      this.IllnessRecordService.getIllnessRecordsByPatientId(this.Patient.id).subscribe((response:any)=>{
        console.log(this.Patient.id)
        console.log(response)
        this.dataSource1.data=response;
      })
      this.PatientTreatmentService.getPatientTreatmentByPatientId(this.Patient.id).subscribe((response:any)=>{
        this.dataSource2.data=response;
      })
      this.PatientDiagnosticService.getPatientDiagnosisByPatientId(this.Patient.id).subscribe((response:any)=>{
        this.dataSource3.data=response;
      })
      this.AppointmentService.getAppointmentsByPatientId(this.Patient.id).subscribe((response:any)=>{
        this.dataSource4.data=response;
      })
      this.SurveillanceService.getSurveillanceByPatientandDoctorId(this.Patient.id,this.DoctorResource.id).subscribe((response:any)=>{
        this.dataSource5.data=response;
        this.SurveillanceResource1=this.dataSource5.data.pop() 
      })
  })
  
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(clinicalHisotory, {
      width: '250px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'clinicalhistoryaccept',
  templateUrl: './dialog/clinicalhistory.html',
})
export class clinicalHisotory{
  constructor(
    public dialogRef: MatDialogRef<clinicalHisotory>,
    
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }




}