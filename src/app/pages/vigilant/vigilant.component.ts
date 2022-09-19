import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from './../../services/doctor/doctor.service';
import { DoctorResource } from './../../models/doctor/DoctorResource';
import { SurveillanceService } from './../../services/surveillance/surveillance.service';
import { CreateSurveillanceResource } from './../../models/surveillance/CreateSurveillanceResource';
import { DocumentType } from './../../models/patient/DocumentType.enum';
import { PatientResource } from 'src/app/models/patient/PatientResource';
import { PatientService } from './../../services/patient/patient.service';
import { Vigilancia } from './../../models/Vigilancia';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-vigilant',
  templateUrl: './vigilant.component.html',
  styleUrls: ['./vigilant.component.css'],
  providers: [DatePipe]
})
export class VigilantComponent implements OnInit {
  public vigilantform!:FormGroup;
  CreateSurveillanceResource!:CreateSurveillanceResource
  date!:Date;
  Patient!:PatientResource;
  DoctorResource!:DoctorResource;
  whois=""
  home!:string
  id!:number
  documentnumber = new FormControl("", Validators.min(7))
  
  constructor(public dialog: MatDialog,private formBuilder:FormBuilder,private datePipe: DatePipe,private PATIENTSERVICE:PatientService,private surveillance:SurveillanceService,
    private DoctorService:DoctorService,private ActivatedRoute:ActivatedRoute,private router:Router) { 
    this.CreateSurveillanceResource={}as CreateSurveillanceResource
    this.date=new Date()
    this.Patient={}as PatientResource
  }
  


  ngOnInit() {
    let doctorid=parseInt(this.ActivatedRoute.snapshot.paramMap.get('id')!)
    this.whois=(this.ActivatedRoute.snapshot.url[0].path)
    this.id=doctorid
    this.Patient.name="nombre"
    this.Patient.lastname="apellido"
    this.Patient.documentType=DocumentType.DNI
    this.Patient.documentNumber="numero"
    this.Patient.gender="genero"
    this.Patient.height="altura"
    this.vigilantform=this.formBuilder.group({
     peso:[''],
     hemoglobina:['',Validators.required],
     linfocitos:['',Validators.required],
     segmentados:['',Validators.required],
     monocitos:['',Validators.required],
     vcm:['',Validators.required],
     hcm:['',Validators.required],
     leucocitos:['',Validators.required],
     hematies:['',Validators.required],
     glucosa:['',Validators.required],
     colesterol:['',Validators.required],
     trigliceridos:['',Validators.required],
     urea:['',Validators.required],
     creatinina:['',Validators.required],
     densidadOrina: ['',Validators.required],
     pH:['',Validators.required],
     proteinas:['',Validators.required],
     cetonas:['',Validators.required],
     urobilinogeno:['',Validators.required],
     bilirrubina :['',Validators.required],
     nitrito :['',Validators.required],
     cristales :['',Validators.required],
     azucar :['',Validators.required],
     aspectoOrina:['',Validators.required],
     colorOrina:['',Validators.required],
     caloriasPlan:['',Validators.required],
     caloriasConsum:['',Validators.required],
     apetito:['',Validators.required],
     dolores:['',Validators.required],
     otroSintoma:['',Validators.required],
     imc:['',Validators.required],

     })
    this.findDoctor(doctorid)
    if(this.whois=="doctor"){
       this.home="home-doctor"
    }
    if(this.whois=="staff"){
      this.home="home-staff"
   }
   


  }
  validateDni(){
        
        if(this.documentnumber.value?.length === 8){
            return true
        }else{
          return false
        }

  }
  onSubmit(){
    this.openDialog()
    this.surveillance.createSurveillance(this.Patient.id,this.DoctorResource.id,this.CreateSurveillanceResource).subscribe((response:any)=>{
           
    })
    //this.CreateSurveillanceResource.=this.date
    //console.log(this.vigilant)
  }
  findDoctor(id:number){
         this.DoctorService.getDoctorById(id).subscribe((response:any)=>{
                    this.DoctorResource=response           
         })
  }

  ReturnHome(){
    this.router.navigate([this.whois,this.id,this.home])
  }
  findbyDNI(){
         
        this.PATIENTSERVICE.getPatientByDocumentNumber(this.documentnumber.value).subscribe((response:any)=>{
                     this.Patient=response;
                     console.log(this.Patient) 
        })
  }
  getfecha(){




    let datform=this.datePipe.transform(this.date, 'dd/MM/yyyy')!;
    
    
    
    
    return datform
    
    }
  openDialog(): void {
    const dialogRef = this.dialog.open(vigilantAccept, {
      width: '250px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['/doctor',this.DoctorResource.id,'home-doctor'])

    });
  }

}
@Component({
  selector: 'vigilantaccept',
  templateUrl: './dialog/vigilantaccept.html',
})
export class vigilantAccept{
  constructor(
    public dialogRef: MatDialogRef<vigilantAccept>,
    
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }




}