import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tab } from '../model/tab.model';

@Injectable({
  providedIn: 'root'
})

export class TabsService {

  private serviceUrl = 'https://localhost:44300/api/tabs';

  constructor(private http: HttpClient) { }

  getTabs(): Observable<Tab[]> {
    return this.http.get<Tab[]> (this.serviceUrl)
  }
  

}
