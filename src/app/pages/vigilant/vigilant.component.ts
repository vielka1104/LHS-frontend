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

  public hematologyform!:FormGroup;
  public urologyform!:FormGroup;
  public nutricionalform!:FormGroup;



  CreateSurveillanceResource!:CreateSurveillanceResource
  date!:Date;
  Patient!:PatientResource;
  DoctorResource!:DoctorResource;
  whois=""
  home!:string
  id!:number
  finderror!:boolean
  documentnumber = new FormControl("", Validators.min(7))
  
  checknutricional!:boolean
  checkneurology!:boolean
  checkhematology!:boolean
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
     peso:['',Validators.required],
     

     })

     this.hematologyform=this.formBuilder.group({

      hemoglobina:[0,Validators.required],
      linfocitos:[0,Validators.required],
      segmentados:[0,Validators.required],
      monocitos:[0,Validators.required],
      vcm:[0,Validators.required],
      hcm:[0,Validators.required],
      leucocitos:[0,Validators.required],
      hematies:[0,Validators.required],
      glucosa:[0,Validators.required],
      colesterol:[0,Validators.required],
      trigliceridos:[0,Validators.required],

     })
     this.urologyform=this.formBuilder.group({

     urea:[0,Validators.required],
     creatinina:[0,Validators.required],
     densidadOrina: [0,Validators.required],
     pH:[0,Validators.required],
     proteinas:[0,Validators.required],
     cetonas:[0,Validators.required],
     urobilinogeno:[0,Validators.required],
     bilirrubina :[0,Validators.required],
     nitrito :[0,Validators.required],
     cristales :[0,Validators.required],
     azucar :[0,Validators.required],
     aspectoOrina:[0,Validators.required],
     colorOrina:[0,Validators.required],

     })
     this.nutricionalform=this.formBuilder.group({
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
    console.log(this.CreateSurveillanceResource)
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

  hematologynull(){
   
    if(this.hematologyform.controls["hemoglobina"].value==undefined && 
    this.hematologyform.controls["linfocitos"].value==undefined && 
    this.hematologyform.controls["segmentados"].value==undefined &&
    this.hematologyform.controls["monocitos"].value==undefined &&
    this.hematologyform.controls["vcm"].value==undefined &&
    this.hematologyform.controls["hcm"].value==undefined &&
    this.hematologyform.controls["leucocitos"].value==undefined && 
    this.hematologyform.controls["hematies"].value==undefined &&
    this.hematologyform.controls["glucosa"].value==undefined &&
    this.hematologyform.controls["colesterol"].value==undefined &&
    this.hematologyform.controls["trigliceridos"].value==undefined){
     this.checkhematology=true;

    }else{
      this.checkhematology=false;
    }
  }
  urologynull(){

    if(this.urologyform.controls["urea"].value==undefined && 
    this.urologyform.controls["creatinina"].value==undefined && 
    this.urologyform.controls["densidadOrina"].value==undefined &&
    this.urologyform.controls["pH"].value==undefined &&
    this.urologyform.controls["proteinas"].value==undefined &&
    this.urologyform.controls["cetonas"].value==undefined &&
    this.urologyform.controls["urobilinogeno"].value==undefined && 
    this.urologyform.controls["bilirrubina"].value==undefined &&
    this.urologyform.controls["nitrito"].value==undefined &&
    this.urologyform.controls["cristales"].value==undefined &&
    this.urologyform.controls["azucar"].value==undefined &&
    this.urologyform.controls["aspectoOrina"].value==undefined &&
    this.urologyform.controls["colorOrina"].value==undefined){
      this.checkneurology=true;

    }else{
      this.checkneurology=false;
    }


  }
  nutricionnull(){
   
   
    if(this.nutricionalform.controls["caloriasPlan"].value==undefined && 
    this.nutricionalform.controls["caloriasConsum"].value==undefined && 
    this.nutricionalform.controls["apetito"].value==undefined &&
    this.nutricionalform.controls["dolores"].value==undefined &&
    this.nutricionalform.controls["otroSintoma"].value==undefined &&
    this.nutricionalform.controls["imc"].value==undefined 
    ){
      this.checknutricional=true

    }else{
     
      this.checknutricional=false
    }

  }

  CanSave(){

      let validatevigilant=false
      let validatenutricinal=false
      let validateurology=false
      let validatehematology=false
      this.nutricionnull()
      this.urologynull()
      this.hematologynull()
      if(this.vigilantform.valid){
         
          validatevigilant=true
      }
            
      if(this.checknutricional || this.nutricionalform.valid){
        
        validatenutricinal=true
      }
      if(this.checkneurology || this.urologyform.valid){
       
        validateurology=true
      }
      if(this.checkhematology || this.hematologyform.valid){
        
         validatehematology=true
      }
      if(validatevigilant && validatenutricinal && validateurology && validatehematology && this.Patient.id!=undefined){ 
        return true

      }else{
        return false
      }






  }
  ReturnHome(){
    this.router.navigate([this.whois,this.id,this.home])
  }
  findbyDNI(){
         
        this.PATIENTSERVICE.getPatientByDocumentNumber(this.documentnumber.value).subscribe((response:any)=>{
                     this.Patient=response;
                     console.log(this.Patient) 
        },err=>{
         alert("Dni no identificado")
          
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
  checkheight(height:string){
     if(height!="altura"){
      let complete=`${height} m`
      return complete;
     }
     return height

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