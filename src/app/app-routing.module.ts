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
import { AppointmentDoctorComponent } from './pages/appointments/appointment-doctor/appointment-doctor.component';
import { AppointmentComponent } from './pages/appointments/appointment-patient/appointment.component';
import { MedicalScheduleComponent } from './pages/appointments/appointment-patient/medical-schedule/medical-schedule.component';
import { HomeComponent } from './pages/homes/home-doctor/home.component';
import { HomePatientComponent } from './pages/homes/home-patient/home-patient.component';
import { HomeStaffComponent } from './pages/homes/home-staff/home-staff.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicalRecordsComponent } from './pages/medical-records/medical-records.component';
import { PatientRecordComponent } from './pages/medical-records/patient-record/patient-record.component';
import { RecordFormComponent } from './pages/appointments/appointment-doctor/appointment-form/record-form.component';
import { UpdateRecordComponent } from './pages/medical-records/update-record/update-record.component';
import { RegisterMedicalComponent } from './pages/registers/register-medical/register-medical.component';
import { RegisterStaffComponent } from './pages/registers/register-staff/register-staff.component';
import { RegisterUserComponent } from './pages/registers/register-user/register-user.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AppointmentStaffComponent } from './pages/appointments/appointment-staff/appointment-staff.component';

const routes: Routes = [
  {path: "register-user",component: RegisterUserComponent},
  {path: "login",component: LoginComponent},
  {path: "register-medical",component: RegisterMedicalComponent},
  {path: "register-staff",component: RegisterStaffComponent},
  {path: "doctor/:id/home-doctor",component: HomeComponent},
  {path: "appointment-patient/patient/:id",component: AppointmentComponent},
  {path: "appointment-doctor/doctor/:id",component: AppointmentDoctorComponent},
  {path: "appointment-staff",component: AppointmentStaffComponent},
  {path: "medical-schedule/patient/:patientid/doctor/:doctorid",component: MedicalScheduleComponent},
  {path: "medical-records",component: MedicalRecordsComponent},
  {path: "patient-record",component: PatientRecordComponent},
  {path: "appointment-form/doctor/:doctorid/patient/:patientid",component: RecordFormComponent},
  {path: "update-record",component: UpdateRecordComponent},
  {path: "patient/:id/home-patient",component: HomePatientComponent},
  {path: "staff/:id/home-staff",component: HomeStaffComponent},
  {path:"staff/:id/vigilant",component:VigilantComponent},
  {path:"staff/:id/clinical-histories",component:ClinicalHistoriesComponent},
  {path:"staff/:id/reporter-general-patient-risk",component:PatientRiskComponent},
  {path:"staff/:id/reporter-patient-risk",component:MonitPatientRiskComponent},
  {path:"staff/:id/reporter-general-treatment",component:TreatmentComponent},
  {path:"staff/:id/reporter-treatment",component:MonitorTreatmentComponent},
  {path:"staff/:id/reporter-general-health-indicator",component:GeneralHealthIndicatorComponent},
  {path:"staff/:id/reporter-health-indicator",component:HealthIndicatorComponent},
  {path:"staff/:id/reporter-general-diagnostic",component:GeneralDiagnosticComponent},
  {path:"staff/:id/reporter-diagnostic",component:DiagnosticComponent},
  {path:"staff/:id/reporter-efficiency",component:EfficiencyComponent},
  {path: "staff-users",component: UsersPageComponent},


  {path:"doctor/:id/vigilant",component:VigilantComponent},
  {path:"doctor/:id/clinical-histories",component:ClinicalHistoriesComponent},
  {path:"doctor/:id/reporter-general-patient-risk",component:PatientRiskComponent},
  {path:"doctor/:id/reporter-patient-risk",component:MonitPatientRiskComponent},
  {path:"doctor/:id/reporter-general-treatment",component:TreatmentComponent},
  {path:"doctor/:id/reporter-treatment",component:MonitorTreatmentComponent},
  {path:"doctor/:id/reporter-general-health-indicator",component:GeneralHealthIndicatorComponent},
  {path:"doctor/:id/reporter-health-indicator",component:HealthIndicatorComponent},
  {path:"doctor/:id/reporter-general-diagnostic",component:GeneralDiagnosticComponent},
  {path:"doctor/:id/reporter-diagnostic",component:DiagnosticComponent},
  {path:"doctor/:id/reporter-efficiency",component:EfficiencyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
