import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Kpi } from '../../model/kpi.model';
import { KpiService } from '../../service/kpi.service';
import { Tab } from '../../model/tab.model';
import { TabsService } from '../../service/tabs.service';

import { TemplatesService } from '../../service/templates.service';

@Component({
  selector: 'app-template-create',
  templateUrl: './template-create.component.html',
  styleUrls: ['./template-create.component.css']
})
export class TemplateCreateComponent implements OnInit {

  templateName: string;

  tabs: Tab[] = [];
  selectedTab: number;

  kpis: Kpi[] = [];

  templateForm: FormGroup;
  newTabs: FormArray;

  
  constructor(private fb: FormBuilder, 
    private tabsService: TabsService,
    private kpiService: KpiService) { }

  ngOnInit() {

    this.getTabs();
    this.getKpi();

    this.templateForm = this.fb.group({
      name: [''],
      newTabs: this.fb.array([this.createTab()])
    });

  }

  getTabs(): void {
    this.tabsService.getTabs()
      .subscribe(tabs => this.tabs = tabs);
  }

  getKpi(): void {
    this.kpiService.getKpi()
      .subscribe(kpis => this.kpis = kpis);
  }

  createTab(): FormGroup {
    return this.fb.group({
      tabId: [''],
      kpi: new FormControl([])
    });
  }

  addTab(): void {
    this.newTabs = this.templateForm.get('newTabs') as FormArray;
    debugger;
    this.newTabs.push(this.createTab());
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.templateForm.value.name);
  }

}


