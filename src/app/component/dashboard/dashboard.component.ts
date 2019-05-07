import { Component, OnInit } from '@angular/core';
import { Kpi } from '../../model/kpi.model';
import { KpiService } from '../../service/kpi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  kpis: Kpi[] = [];

  constructor(private kpiService: KpiService) { }

  ngOnInit() {
    this.getKpi();
  }

  getKpi(): void {
    this.kpiService.getKpi()
      .subscribe(kpis => this.kpis = kpis);
  }
}