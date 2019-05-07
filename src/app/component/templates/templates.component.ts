import { Component, OnInit } from '@angular/core';
import { Kpi } from '../../model/kpi.model';
import { KpiService } from '../../service/kpi.service';
import { Template } from '../../model/template.model';
import { TemplatesService } from '../../service/templates.service';


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})

export class TemplatesComponent implements OnInit {

  templates: Template[] = [];

  constructor(private templatesService: TemplatesService) { }

  ngOnInit() {
    this.getTemplates();
  }

  getTemplates(): void {
    this.templatesService.getTemplates()
      .subscribe(templates => this.templates = templates);
  }
}
