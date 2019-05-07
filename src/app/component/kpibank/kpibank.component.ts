import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { KpiService } from '../../service/kpi.service';
import { Observable, of, Subject } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { Kpi } from '../../model/kpi.model';

@Component({
  selector: 'app-kpibank',
  templateUrl: './kpibank.component.html',
  styleUrls: ['./kpibank.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class KpibankComponent implements OnInit {
  dataSource = new KpiDataSource(this.kpiService);
  kpi: Kpi | null;
  displayedColumns = ['id', 'name', 'creationDate'];
  levelColumns = ['rank', 'name', 'value'];
  constructor(private kpiService: KpiService) { }
  
  ngOnInit() {
  }

}

export class KpiDataSource extends DataSource<any> {
  constructor(private kpiService: KpiService) {
    super();
  }
  connect(): Observable<Kpi[]> {
    return this.kpiService.getKpi();
  }
  disconnect() {}

}