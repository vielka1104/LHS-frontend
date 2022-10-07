import { CreateSpecialtyResource } from './../../models/specialty/CreateSpecialtyResource';
import { SpecialtyResource } from './../../models/specialty/SpecialtyResource';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  basePath ="http://flash-rope-364617.rj.r.appspot.com/api/v1/specialties"
  //basePath ="http://localhost:8080/api/v1/specialties"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
constructor(private http: HttpClient) { }
handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.log(`An error occurred: ${error.error.message} `);
  }
  else {
    console.error(
      `Backend returned code ${error.status}, body was: ${error.error}`
    );
  }

  return throwError('Something happened with request, please try again later');
}


getAllSpecialties(): Observable<SpecialtyResource>{
  return this.http.get<SpecialtyResource>(`${this.basePath}`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));

}
getSpecialtyById(specialtyId:number): Observable<SpecialtyResource>{
  return this.http.get<SpecialtyResource>(`${this.basePath}/${specialtyId}`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));
}
getSpecialtyByName(name:string): Observable<SpecialtyResource>{

  return this.http.get<SpecialtyResource>(`${this.basePath}/name/${name}`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));

}

createSpecialty(item:CreateSpecialtyResource){

  return this.http.post<SpecialtyResource>(`${this.basePath}`, JSON.stringify(item), this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));


}
updateSpecialty(specialtyId:number,item:any){

  return this.http.put<SpecialtyResource>(`${this.basePath}/${specialtyId}`, JSON.stringify(item), this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));

}
deleteShift(specialtyId:number){
  return this.http.delete(`${this.basePath}/${specialtyId}`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));

}












}
