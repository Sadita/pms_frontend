import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TemplatesService } from '../../service/templates.service';

import { Template } from '../../model/template.model';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.css']
})
export class TemplateDetailComponent implements OnInit {

  @Input() template: Template;

  constructor(
    private route: ActivatedRoute,
    private templatesService: TemplatesService,
    private location: Location
    ) { }

    ngOnInit(): void {
      this.getTemplate();
    }
    
    getTemplate(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.templatesService.getTemplate(id)
        .subscribe(template => this.template = template);
    }

}
