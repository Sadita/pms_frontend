import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpibankComponent } from './kpibank.component';

describe('KpibankComponent', () => {
  let component: KpibankComponent;
  let fixture: ComponentFixture<KpibankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpibankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpibankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
