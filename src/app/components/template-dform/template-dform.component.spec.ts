import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDFormComponent } from './template-dform.component';

describe('TemplateDFormComponent', () => {
  let component: TemplateDFormComponent;
  let fixture: ComponentFixture<TemplateDFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDFormComponent]
    });
    fixture = TestBed.createComponent(TemplateDFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
