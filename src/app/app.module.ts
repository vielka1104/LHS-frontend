import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RegisterUserComponent } from './pages/registers/register-user/register-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { FirstNavbarComponent } from './pages/first-navbar/first-navbar.component';
import { ResultDialogComponent } from './pages/dialogs/result-dialog/result-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterMedicalComponent } from './pages/registers/register-medical/register-medical.component';
import { RegisterStaffComponent } from './pages/registers/register-staff/register-staff.component';
import { HomeComponent } from './pages/homes/home-doctor/home.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { MedicalScheduleComponent } from './pages/appointment/medical-schedule/medical-schedule.component';
import { ResultDialogAppointmentComponent } from './pages/dialogs/result-dialog-appointment/result-dialog-appointment.component';
import { MedicalRecordsComponent } from './pages/medical-records/medical-records.component';
import { PatientRecordComponent } from './pages/medical-records/patient-record/patient-record.component';
import { RecordFormComponent } from './pages/medical-records/record-form/record-form.component';
import { ResultDialogRecordComponent } from './pages/dialogs/result-dialog-record/result-dialog-record.component';
import { ResultDialogAncientComponent } from './pages/dialogs/result-dialog-ancient/result-dialog-ancient.component';
import { ResultDialogClinicComponent } from './pages/dialogs/result-dialog-clinic/result-dialog-clinic.component';
import { ResultDialogTreatmentComponent } from './pages/dialogs/result-dialog-treatment/result-dialog-treatment.component';
import { UpdateRecordComponent } from './pages/medical-records/update-record/update-record.component';
import { DialogUpdateDataComponent } from './pages/dialogs/dialog-update-data/dialog-update-data.component';
import { HomePatientComponent } from './pages/homes/home-patient/home-patient.component';
import { HomeStaffComponent } from './pages/homes/home-staff/home-staff.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UpdateDoctorComponent } from './pages/users-page/update-dialogs/update-doctor/update-doctor.component';
import { UpdateStaffComponent } from './pages/users-page/update-dialogs/update-staff/update-staff.component';
import { UpdatePatientComponent } from './pages/users-page/update-dialogs/update-patient/update-patient.component';

@NgModule({
  declarations: [									
    AppComponent,
      RegisterUserComponent,
      LoginComponent,
      FirstNavbarComponent,
      ResultDialogComponent,
      RegisterMedicalComponent,
      RegisterStaffComponent,
      HomeComponent,
      AppointmentComponent,
      MedicalScheduleComponent,
      ResultDialogAppointmentComponent,
      MedicalRecordsComponent,
      PatientRecordComponent,
      RecordFormComponent,
      ResultDialogRecordComponent,
      ResultDialogAncientComponent,
      ResultDialogClinicComponent,
      ResultDialogTreatmentComponent,
      UpdateRecordComponent,
      DialogUpdateDataComponent,
      HomePatientComponent, 
      HomeStaffComponent,
      UsersPageComponent,
      UpdateDoctorComponent,
      UpdateStaffComponent,
      UpdatePatientComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
