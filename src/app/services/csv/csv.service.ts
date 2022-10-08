import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CreateSurveillanceCSV } from 'src/app/models/surveillance/CreateSurveillanceCSV';
import { SurveillanceResource } from 'src/app/models/surveillance/SurveillanceResource';
import { PatientResource } from '../../models/patient/PatientResource';
import { PatientService } from '../patient/patient.service';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

constructor(private patientService:PatientService) {}
public importDataFromCSV(csvText: string): Array<any> {
  const propertyNames = csvText.slice(0, csvText.indexOf('\n')).split(',');
  const dataRows = csvText.slice(csvText.indexOf('\n') + 1).split('\n');

  let dataArray: any[] = [];
  dataRows.forEach((row) => {
    let values = row.split(',');

    let obj: any = new Object();

    for (let index = 0; index < propertyNames.length; index++) {
      const propertyName: string = propertyNames[index];

      let val: any = values[index];
      if (val === '') {
        val = null;
      }

      obj[propertyName] = val;
    }

    dataArray.push(obj);
  });

  return dataArray;
}

public importDataFromCSVByType(csvText: string, obj: CreateSurveillanceCSV): Array<any> {
  const propertyNames = csvText.slice(0, csvText.indexOf('\n')).split(';');
  const dataRows = csvText.slice(csvText.indexOf('\n') + 1).split('\n');
  console.log(dataRows.pop())
  console.log(propertyNames)
  console.log(dataRows)
  let dataArray: CreateSurveillanceCSV[] = [];
  dataRows.forEach((row) => {
   
    let values = row.split(';');
    console.log(values)
    let dataObj: CreateSurveillanceCSV = new CreateSurveillanceCSV();
    for (let index = 0; index < propertyNames.length; index++) {
      const propertyName: string = propertyNames[index];

      let value: any = values[index];
      if (value === '') {
        value = null;
      }


      if (typeof obj[propertyName] === 'undefined') {
        dataObj[propertyName] = undefined;
      }
      else if (typeof obj[propertyName] === 'boolean') {
        if(value != null){
          switch(value){
            case '0':
              dataObj[propertyName] = false;
              break;
            case '1':
              dataObj[propertyName] = true;
              break;
          }
        }else{
          dataObj[propertyName] = null;
        }
      } 
      else if (typeof obj[propertyName] === 'number') {
        dataObj[propertyName] = Number(value);
      } 
      else if (typeof obj[propertyName] === 'string') {
        dataObj[propertyName] = value;
      }
      else if (typeof obj[propertyName] === 'object') {
        console.error("do no have algorithm to convert object");
      }
      else {
        console.error(".");
      }
    }
    console.log(dataObj)
    dataArray.push(dataObj);
  });

  return dataArray;
}
}
