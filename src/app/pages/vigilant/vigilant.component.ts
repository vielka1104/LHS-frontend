import { StaffResource } from 'src/app/models/staff/StaffResource';
import { StaffService } from './../../services/staff/staff.service';

import { DoctorResource } from 'src/app/models/doctor/DoctorResource';
import { PatientResource } from './../../models/patient/PatientResource';
import { PatientService } from 'src/app/services/patient/patient.service';
import { CreateSurveillanceCSV } from './../../models/surveillance/CreateSurveillanceCSV';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from './../../services/doctor/doctor.service';

import { SurveillanceService } from './../../services/surveillance/surveillance.service';
import { CreateSurveillanceResource } from './../../models/surveillance/CreateSurveillanceResource';
import { DocumentType } from './../../models/patient/DocumentType.enum';

import { Vigilancia } from './../../models/Vigilancia';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
import { CsvService } from 'src/app/services/csv/csv.service';
import { response } from 'express';
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
  public Clinicform!:FormGroup;
  public NutritionForm!:FormGroup;


  CreateSurveillanceResource!:CreateSurveillanceResource
  csvvigilant!:CreateSurveillanceResource
  date!:Date;
  Patient!:PatientResource;
  DoctorResource!:DoctorResource;
  StaffResource!:StaffResource;
  whois=""
  home!:string
  id!:number
  finderror!:boolean

  validatecsv=false
  documentnumber = new FormControl("", Validators.min(7))
  
  checkktv!:boolean
  checkClinic!:boolean
  checkShared!:boolean
  checkPrediction!:boolean
  checkLegacy!:boolean


  constructor(public dialog: MatDialog,private formBuilder:FormBuilder,private datePipe: DatePipe,private PATIENTSERVICE:PatientService,private surveillance:SurveillanceService,
    private ActivatedRoute:ActivatedRoute,private router:Router,private _csvService: CsvService, private PatientService:PatientService,private DoctorService:DoctorService,private StaffService:StaffService) { 
    this.CreateSurveillanceResource={}as CreateSurveillanceResource
    this.csvvigilant={}as CreateSurveillanceResource
    this.date=new Date()
    this.Patient={}as PatientResource
    this.StaffResource={}as StaffResource
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

     this.Clinicform=this.formBuilder.group({
      ureaPre:['',Validators.required],
      hematocrit:['',Validators.required],
      chlorine:['',Validators.required],
      phosphorus:['',Validators.required],
      serumCalcium:['',Validators.required],
      alkalinePhosphatase:['',Validators.required],
      tgo:['',Validators.required],
      tgp:['',Validators.required],
      dayCreatinine:['',Validators.required],
      parathormone:['',Validators.required],
      serumIron:['',Validators.required],
      serumFerritin:['',Validators.required],
      transferrinSaturation:['',Validators.required],
      transferrin:['',Validators.required],
      elisa:['',Validators.required],
      vdrlAndRpr:['',Validators.required],
      hepatitisBAntigen:['',Validators.required],
      hepatitisBAntibody:['',Validators.required],
      hepatitisCAntibody:['',Validators.required],
      peso:['',Validators.required],
      initWeight:['',Validators.required],
     finalWeight:['',Validators.required],
      hdTime:['',Validators.required],
      uf:['',Validators.required],
      bloodUrea:['',Validators.required],
      serumCreatinine:['',Validators.required],

      hemoglobin:['',Validators.required],

      kalbumintv:['',Validators.required],

      sodium:['',Validators.required],

      potassium:['',Validators.required],

      albumin:['',Validators.required],
      bloodPressure:['',Validators.required],
      specificGravity:['',Validators.required],

      sugar:['',Validators.required],

      redBloodCells:['',Validators.required],

      pusCells:['',Validators.required],

      pusCellClumps:['',Validators.required],
      bacteria:['',Validators.required],
      bloodGlucoseRandom:['',Validators.required],
      packedCellVolume:['',Validators.required],
      whiteBloodCellCount:['',Validators.required],
      redBloodCellCount:['',Validators.required],
     })

     this.NutritionForm=this.formBuilder.group({
      appetite:['',Validators.required],
      planCalories:['',Validators.required],
      consumedCalories:['',Validators.required],
      pain:['',Validators.required],
      otherSymptoms:['',Validators.required],
      imc:['',Validators.required],
 
      })

    this.findDoctor(doctorid)
    this.findstaff(doctorid)
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
    this.surveillance.createSurveillance(this.Patient.id,this.CreateSurveillanceResource).subscribe((response:any)=>{
           
    })
    //this.CreateSurveillanceResource.=this.date
    //console.log(this.vigilant)
  }
  findDoctor(id:number){
         this.DoctorService.getDoctorById(id).subscribe((response:any)=>{
                    this.DoctorResource=response           
         })
  }
  
  findstaff(id:number){
    this.StaffService.getStaffById(id).subscribe((response:any)=>{
               this.StaffResource=response           
    })
  }



  /*
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
     

    }
    else if(this.hematologyform.controls["hemoglobina"].value==null && 
    this.hematologyform.controls["linfocitos"].value==null && 
    this.hematologyform.controls["segmentados"].value==null &&
    this.hematologyform.controls["monocitos"].value==null &&
    this.hematologyform.controls["vcm"].value==null &&
    this.hematologyform.controls["hcm"].value==null &&
    this.hematologyform.controls["leucocitos"].value==null && 
    this.hematologyform.controls["hematies"].value==null &&
    this.hematologyform.controls["glucosa"].value==null &&
    this.hematologyform.controls["colesterol"].value==null &&
    this.hematologyform.controls["trigliceridos"].value==null){
     this.checkhematology=true;
     

    }
     else{
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
      console.log("pinrp")
      this.checkneurology=true;

    }
    else if(this.urologyform.controls["urea"].value==null && 
    this.urologyform.controls["creatinina"].value==null && 
    this.urologyform.controls["densidadOrina"].value==null &&
    this.urologyform.controls["pH"].value==null &&
    this.urologyform.controls["proteinas"].value==null &&
    this.urologyform.controls["cetonas"].value==null &&
    this.urologyform.controls["urobilinogeno"].value==null && 
    this.urologyform.controls["bilirrubina"].value==null &&
    this.urologyform.controls["nitrito"].value==null &&
    this.urologyform.controls["cristales"].value==null &&
    this.urologyform.controls["azucar"].value==null &&
    this.urologyform.controls["aspectoOrina"].value=="" &&
    this.urologyform.controls["colorOrina"].value==""){


    

      this.checkneurology=true;

    }
    
    else{
     
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

    }
    else if(this.nutricionalform.controls["caloriasPlan"].value==null && 
    this.nutricionalform.controls["caloriasConsum"].value==null && 
    this.nutricionalform.controls["apetito"].value=="" &&
    this.nutricionalform.controls["dolores"].value=="" &&
    this.nutricionalform.controls["otroSintoma"].value=="" &&
    this.nutricionalform.controls["imc"].value==null ){
     
      this.checknutricional=true
    }
    else{
      
      this.checknutricional=false
    }

  }

*/














  CanSave(){

    /*  let validatevigilant=false
      let validatenutricinal=false
      let validateurology=false
      let validatehematology=false
      this.nutricionnull()
      this.urologynull()
      this.hematologynull()
   
      if(this.vktform.valid||this.checkktv){
         
          validatevigilant=true
      }
            
      if(this.checkClinic || this.Clinicform.valid){
        
        validatenutricinal=true
      }
      if(this.checkShared || this.Sharedform.valid){
        console.log("validado urologia")
        validateurology=true
      }
      if(this.checkPrediction || this.Predictionform.valid){
        
         validatehematology=true
      }
      if(this.checkLegacy || this.Legacyform.valid){
        
        validatehematology=true
     }
      if(validatevigilant && validatenutricinal && validateurology && validatehematology && this.Patient.id!=undefined){ 
        return true

      }else{
        return false
      }
   */
      if(this.Clinicform.controls["initWeight"].value!=null &&this.Patient.id!=undefined){ 
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
    public importedData:Array<CreateSurveillanceCSV> = [];
  openDialog(): void {
    const dialogRef = this.dialog.open(vigilantAccept, {
      width: '250px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(this.whois=="doctor"){
        this.router.navigate(['/doctor',this.DoctorResource.id,'home-doctor'])
     }
     if(this.whois=="staff"){
      this.router.navigate(['/staff',this.StaffResource.id,'home-staff'])
    }
     

    });
  }
  checkheight(height:string){
     if(height!="altura"){
      let complete=`${height} m`
      if(height==null){
        return "sin altura"
      }
      return complete;
     }
     return height

  }
  public async importDataFromCSVByType(event: any) {
    let fileContent = await this.getTextFromFile(event);
    this.validatecsv=true
    this.importedData = this._csvService.importDataFromCSVByType(
      fileContent,
      new CreateSurveillanceCSV()
    );


  }
  private async getTextFromFile(event:any){
    const file: File = event.target.files[0];
    let fileContent = await file.text();

    return fileContent;
  }
  calcularimc(){
    this.CreateSurveillanceResource.imc = this.CreateSurveillanceResource.initWeight/(Number(this.Patient.height)*Number(this.Patient.height))
    if(this.CreateSurveillanceResource.initWeight ==null||this.Patient.height==null){
      this.CreateSurveillanceResource.imc =0
    }
    return  this.CreateSurveillanceResource.imc
  }
  save(){
    try{
      for (let element in this.importedData){
        let surveillance: CreateSurveillanceResource = new CreateSurveillanceResource();
           surveillance.albumin      =    this.importedData[element].albumin
           surveillance.alkalinePhosphatase    =   this.importedData[element].alkaline_phosphatase
           surveillance.appetite     =   (this.importedData[element].appetite)
           surveillance.bacteria    =   (this.importedData[element].bacteria)
           surveillance.bloodGlucoseRandom    =  this.importedData[element].blood_glucose_random
           surveillance.bloodPressure     = this.importedData[element].blood_pressure
           surveillance.bloodUrea   = this.importedData[element].blood_urea
           surveillance.chlorine   = this.importedData[element].chlorine
           surveillance.consumedCalories  = this.importedData[element].consumed_calories
           surveillance.dayCreatinine    =  this.importedData[element].day_creatinine
           surveillance.elisa  =  this.importedData[element].elisa
           surveillance.finalWeight   =  this.importedData[element].final_weight
           surveillance.hdTime  =  this.importedData[element].hd_time
           surveillance.hemoglobin    =   this.importedData[element].hemoglobin
           surveillance.hepatitisBAntibody   = (this.importedData[element].hepatitisbantibody)
           surveillance.hepatitisCAntibody  =  (this.importedData[element].hepatitiscantibody)
           surveillance.hepatitisBAntigen   =  (this.importedData[element].hepatitisbantigen)
           surveillance.imc   =  this.importedData[element].imc
           surveillance.initWeight  = this.importedData[element].init_weight
           surveillance.ktv   = this.importedData[element].ktv
           if(this.importedData[element].other_symptoms=="NULL"){
            this.importedData[element].other_symptoms=null
           }
           surveillance.otherSymptoms    = this.importedData[element].other_symptoms
           surveillance.packedCellVolume   = this.importedData[element].packed_cell_volume
           if(this.importedData[element].pain=="NULL"){
            this.importedData[element].pain=null
           }
           surveillance.pain  = this.importedData[element].pain
           surveillance.parathormone   =  this.importedData[element].parathormone
           surveillance.phosphorus   =  this.importedData[element].phosphorus
           surveillance.planCalories   = this.importedData[element].plan_calories
           surveillance.potassium  =  this.importedData[element].potassium
           surveillance.pusCellClumps    =  (this.importedData[element].pus_cell_clumps)
           surveillance.pusCells   =  (this.importedData[element].pus_cells)
           surveillance.redBloodCellCount =  this.importedData[element].red_blood_cell_count
           surveillance.redBloodCells  =  (this.importedData[element].red_blood_cells)
           surveillance.serumCalcium  =  this.importedData[element].serum_calcium
           surveillance.serumCreatinine  =  this.importedData[element].serum_creatinine
           surveillance.serumFerritin =  this.importedData[element].serum_ferritin
           surveillance.serumIron =  this.importedData[element].serum_iron
           surveillance.sodium  =   this.importedData[element].sodium
           surveillance.specificGravity  =   this.importedData[element].specific_gravity
           surveillance.sugar =  this.importedData[element].sugar
           surveillance.tgo =  this.importedData[element].tgo
           surveillance.tgp   =  this.importedData[element].tgp
           surveillance.transferrin  =  this.importedData[element].transferrin
           surveillance.transferrinSaturation  =  this.importedData[element].transferrin_saturation
           surveillance.uf  =  this.importedData[element].uf
           surveillance.ureaPre  =  this.importedData[element].urea_pre
           surveillance.vdrlAndRpr = (this.importedData[element].vdrl_and_rpr)
           surveillance.whiteBloodCellCount  =  this.importedData[element].white_blood_cell_count
           this.PATIENTSERVICE.getPatientByDocumentNumber(this.importedData[element].patient_dni).subscribe((response:PatientResource)=>{
                this.surveillance.createSurveillance(response.id,surveillance).subscribe((response:any)=>{
                  console.log(response)
                    console.log("enviado")
                 })
                
           }) 
      }
      alert("Datos importados correctamente")
    }
    catch(error){
      console.log(error)
    }
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