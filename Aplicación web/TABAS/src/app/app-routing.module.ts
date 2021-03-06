import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { WorkerRegistrationComponent } from './worker-registration/worker-registration.component';
import { BaggageComponent } from './baggage/baggage.component';
import { NewBaggageComponent } from './new-baggage/new-baggage.component';
import { WorkersComponent } from './workers/workers.component';
import { TablaComponent } from './bagCar/tabla/tabla.component';
import { ReportComponent } from './report/report.component';
import { ConciliationComponent } from './report/conciliation/conciliation.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/login" },
  { path: "login", component: LoginComponent },
  { path: "worker-registration", component: WorkerRegistrationComponent },
  { path: "baggage", component: BaggageComponent },
  { path: "new-baggage", component: NewBaggageComponent },
  { path: "workers", component: WorkersComponent },
  { path: "bagcart", component: TablaComponent },
  { path: "report", component: ReportComponent},
  { path: "conciliation", component: ConciliationComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
