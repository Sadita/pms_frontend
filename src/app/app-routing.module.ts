import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './component/dashboard/dashboard.component';
import { KpibankComponent } from './component/kpibank/kpibank.component';
import { TemplatesComponent } from './component/templates/templates.component';
import { TemplateDetailComponent } from './component/template-detail/template-detail.component';
import { TemplateCreateComponent } from './component/template-create/template-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kpis', component: KpibankComponent },
  { path: 'templates/create', component: TemplateCreateComponent },
  { path: 'templates/:id', component: TemplateDetailComponent },
  { path: 'templates', component: TemplatesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}