import { Vigilancia } from './../../models/Vigilancia';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  vigilant!:Vigilancia
  date!:Date;
  constructor(public dialog: MatDialog,private formBuilder:FormBuilder,private datePipe: DatePipe,) { 
    this.vigilant={}as Vigilancia
    this.date=new Date()
  }

  ngOnInit() {
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


  }
  onSubmit(){
    this.openDialog()
    this.vigilant.fecha=this.date
    console.log(this.vigilant)
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