import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kpi } from '../model/kpi.model';

@Injectable({
  providedIn: 'root'
})

export class KpiService {

  private serviceUrl = 'https://localhost:44300/api/kpis';

  constructor(private http: HttpClient) { }

  getKpi(): Observable<Kpi[]> {
    return this.http.get<Kpi[]> (this.serviceUrl)
  }

}
