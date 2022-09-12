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
  dataSource1 !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  dataSource3 !:MatTableDataSource<any>;
  dataSource4 !:MatTableDataSource<any>;
  dataSourcea=antecedente
  dataSourceb=tratamiento
  dataSourcec=DiagnosticoPaciente
  dataSourced=cita
  displayedColumns: string[] =  ['Antecedente', 'Descripcion', 'fecha'];
  displayedColumns2: string[] = ['Medicamento', 'Dosis Diarias', 'fecha inicio','fecha final'];
  displayedColumns3: string[] = ['Diagnostico', 'Fecha', 'Comentario'];
  displayedColumns4: string[] = ['Fecha', 'Hora Inicio', 'Hora Fin','Notas'];
  constructor(public dialog: MatDialog) { 
    this.dataSource1 = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
    this.dataSource3 = new MatTableDataSource<any>();
    this.dataSource4 = new MatTableDataSource<any>();
     
  }

  ngOnInit() {
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