import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './views/alerts/alerts.component';
import { DetailsComponent } from './views/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/alerts', pathMatch: 'full'},
  { path: 'alerts', component: AlertsComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
