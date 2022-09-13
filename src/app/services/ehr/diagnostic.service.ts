import { DiagnosisResource } from './../../models/diagnostic/DiagnosisResource';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  basePath =""
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

getAllDiagnosis(): Observable<DiagnosisResource>{
  return this.http.get<DiagnosisResource>(`${this.basePath}`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));

}
getDoctorById(doctorId:number): Observable<DiagnosisResource>{

  return this.http.get<DiagnosisResource>(`${this.basePath}/doctors/${doctorId}`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));

}

getDoctorByUserName(username:string): Observable<DiagnosisResource>{

  return this.http.get<DiagnosisResource>(`${this.basePath}/doctors/username/${username}`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));

}
getDoctorByEmail(email:string): Observable<DiagnosisResource>{

  return this.http.get<DiagnosisResource>(`${this.basePath}/doctors/email/${email}`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));

}

getDoctorByFirstNameAndLastName(name:string,lastName:string): Observable<DiagnosisResource>{


  return this.http.get<DiagnosisResource>(`${this.basePath}/doctors/name/${name}/lastName/${lastName}`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));




}

createDoctor(item:any,specialtyId:number,shiftId:number){

  return this.http.post<DiagnosisResource>(`${this.basePath}/specialties/${specialtyId}/shifts/${shiftId}/doctors`, JSON.stringify(item), this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));
}
updateDoctor(doctorId:number,item:any){

  return this.http.put<DiagnosisResource>(`${this.basePath}/doctors/${doctorId}`, JSON.stringify(item), this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));


}

deleteDoctor(doctorId:number){
  return this.http.delete(`${this.basePath}/doctors/${doctorId}`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));

}


























}
