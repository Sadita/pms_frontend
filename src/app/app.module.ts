import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { KpibankComponent } from './component/kpibank/kpibank.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TemplatesComponent } from './component/templates/templates.component';
import { TemplateDetailComponent } from './component/template-detail/template-detail.component';
import { TemplateCreateComponent } from './component/template-create/template-create.component';


import { KpiService } from './service/kpi.service';
import { TemplatesService } from './service/templates.service';
import { TabsService } from './service/tabs.service';

import { AppRoutingModule } from './app-routing.module';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatTabsModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    KpibankComponent,
    DashboardComponent,
    TemplatesComponent,
    TemplateDetailComponent,
    TemplateCreateComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    //HttpModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    KpiService,
    TemplatesService,
    TabsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

