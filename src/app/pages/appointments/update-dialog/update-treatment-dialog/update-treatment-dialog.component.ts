import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreatePatientTreatmentResource } from 'src/app/models/patient-treatment/CreatePatientTreatmentResource';
import { CreateTreatmentResource } from 'src/app/models/treatment/CreateTreatmentResource';

@Component({
  selector: 'app-update-treatment-dialog',
  templateUrl: './update-treatment-dialog.component.html',
  styleUrls: ['./update-treatment-dialog.component.css']
})
export class UpdateTreatmentDialogComponent implements OnInit {

  treatmenteditform!:FormGroup;
 
  CreateTreatmentResource!:CreatePatientTreatmentResource
  constructor(private formBuilder:FormBuilder, @Inject(MAT_DIALOG_DATA) public edittreatmentdata:any) {
      this.CreateTreatmentResource= {} as CreatePatientTreatmentResource
   }

  ngOnInit() {
    this.treatmenteditform=this.formBuilder.group({
      initdate:['',Validators.required],
      enddate:[''],
      dose:['',Validators.required],
     })
     
     if(this.edittreatmentdata){
        this.treatmenteditform.controls['initdate'].setValue(this.edittreatmentdata.startDate);
        this.treatmenteditform.controls['enddate'].setValue(this.edittreatmentdata.endDate);
        this.treatmenteditform.controls['dose'].setValue(this.edittreatmentdata.dose);
     }
  }
  Update(){
        this.CreateTreatmentResource.startDate= this.treatmenteditform.controls['initdate'].value
        this.CreateTreatmentResource.endDate= this.treatmenteditform.controls['enddate'].value
        this.CreateTreatmentResource.dose= this.treatmenteditform.controls['dose'].value
    
        this.edittreatmentdata.startDate= this.CreateTreatmentResource.startDate;
        this.edittreatmentdata.endDate= this.CreateTreatmentResource.endDate;
        this.edittreatmentdata.dose= this.CreateTreatmentResource.dose;

        console.log(this.edittreatmentdata)

  }

}
