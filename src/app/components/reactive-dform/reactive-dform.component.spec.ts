import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDformComponent } from './reactive-dform.component';

describe('ReactiveDformComponent', () => {
  let component: ReactiveDformComponent;
  let fixture: ComponentFixture<ReactiveDformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveDformComponent]
    });
    fixture = TestBed.createComponent(ReactiveDformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
