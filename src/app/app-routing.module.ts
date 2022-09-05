import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { MedicalScheduleComponent } from './pages/appointment/medical-schedule/medical-schedule.component';
import { HomeComponent } from './pages/homes/home-doctor/home.component';
import { HomePatientComponent } from './pages/homes/home-patient/home-patient.component';
import { HomeStaffComponent } from './pages/homes/home-staff/home-staff.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicalRecordsComponent } from './pages/medical-records/medical-records.component';
import { PatientRecordComponent } from './pages/medical-records/patient-record/patient-record.component';
import { RecordFormComponent } from './pages/medical-records/record-form/record-form.component';
import { UpdateRecordComponent } from './pages/medical-records/update-record/update-record.component';
import { RegisterMedicalComponent } from './pages/registers/register-medical/register-medical.component';
import { RegisterStaffComponent } from './pages/registers/register-staff/register-staff.component';
import { RegisterUserComponent } from './pages/registers/register-user/register-user.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {path: "register-user",component: RegisterUserComponent},
  {path: "login",component: LoginComponent},
  {path: "register-medical",component: RegisterMedicalComponent},
  {path: "register-staff",component: RegisterStaffComponent},
  {path: "home-doctor",component: HomeComponent},
  {path: "appointment",component: AppointmentComponent},
  {path: "medical-schedule",component: MedicalScheduleComponent},
  {path: "medical-records",component: MedicalRecordsComponent},
  {path: "patient-record",component: PatientRecordComponent},
  {path: "record-form",component: RecordFormComponent},
  {path: "update-record",component: UpdateRecordComponent},
  {path: "home-patient",component: HomePatientComponent},
  {path: "home-staff",component: HomeStaffComponent},
  {path: "staff-users",component: UsersPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
