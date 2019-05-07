import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Template } from '../model/template.model';

@Injectable({
  providedIn: 'root'
})

export class TemplatesService {

  private serviceUrl = 'https://localhost:44300/api/templates';

  constructor(private http: HttpClient) { }

  getTemplates(): Observable<Template[]> {
    return this.http.get<Template[]> (this.serviceUrl)
  }
  

  getTemplate(id: number): Observable<Template> {
    
    var templateServiceUrl = 'https://localhost:44300/api/templates/' + id;

    // TODO: send the message _after_ fetching the template
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Template> (templateServiceUrl)
  }

}
