import { DiagnosticComponent } from './pages/report/diagnostic/diagnostic.component';
import { HealthIndicatorComponent } from './pages/report/health-indicator/health-indicator.component';
import { MonitorTreatmentComponent } from './pages/report/monitor-treatment/monitor-treatment.component';
import { MonitPatientRiskComponent } from './pages/report/monit-patient-risk/monit-patient-risk.component';
import { EfficiencyComponent } from './pages/report/efficiency/efficiency.component';
import { GeneralDiagnosticComponent } from './pages/report/general-diagnostic/general-diagnostic.component';
import { GeneralHealthIndicatorComponent } from './pages/report/general-health-indicator/general-health-indicator.component';
import { TreatmentComponent } from './pages/report/treatment/treatment.component';
import { PatientRiskComponent } from './pages/report/patient-risk/patient-risk.component';
import { ClinicalHistoriesComponent } from './pages/clinical-histories/clinical-histories.component';
import { VigilantComponent } from './pages/vigilant/vigilant.component';
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
  {path:"vigilant",component:VigilantComponent},
  {path:"clinical-histories",component:ClinicalHistoriesComponent},
  {path:"reporter-general-patient-risk",component:PatientRiskComponent},
  {path:"reporter-patient-risk",component:MonitPatientRiskComponent},
  {path:"reporter-general-treatment",component:TreatmentComponent},
  {path:"reporter-treatment",component:MonitorTreatmentComponent},
  {path:"reporter-general-health-indicator",component:GeneralHealthIndicatorComponent},
  {path:"reporter-health-indicator",component:HealthIndicatorComponent},
  {path:"reporter-general-diagnostic",component:GeneralDiagnosticComponent},
  {path:"reporter-diagnostic",component:DiagnosticComponent},
  {path:"reporter-efficiency",component:EfficiencyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
