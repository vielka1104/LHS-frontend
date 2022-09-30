import { UpdateAppointmentResource } from './../../../../../models/appointment/UpdateAppointmentResource';
import { Component,Inject ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-appointedate-update',
  templateUrl: './appointedate-update.component.html',
  styleUrls: ['./appointedate-update.component.css']
})
export class AppointedateUpdateComponent implements OnInit {
  UpdateAppointmentResource!:UpdateAppointmentResource
  userupdateform!:FormGroup;
  minDate = new Date();
  topdate!:Date;
  hour1:string
  constructor(private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public editpatientdata:any) { 
    this.UpdateAppointmentResource={}as UpdateAppointmentResource
  }

  ngOnInit() {
    this.userupdateform=this.formBuilder.group({
      date:['',Validators.required],
    })
    console.log(this.editpatientdata)
    this.hour1=formatDate(this.editpatientdata.scheduledAt,'YYYY-MM-dd HH:mm:ss','en_US')
    console.log(this.hour1.slice(11,13))
  }
  Update(){
    console.log("fecha seleccionada")
    console.log(this.topdate)
    this.topdate.setHours(parseInt(this.hour1.slice(11,13)))


    this.UpdateAppointmentResource.status=this.editpatientdata.status
    this.UpdateAppointmentResource.notes=this.editpatientdata.notes
    //this.topdate=this.editpatientdata.scheduledAt
    
    this.UpdateAppointmentResource.scheduledAt=this.topdate
    console.log(formatDate(this.UpdateAppointmentResource.scheduledAt,'YYYY-MM-dd HH:mm:ss','en_US'))
    
  }

}
