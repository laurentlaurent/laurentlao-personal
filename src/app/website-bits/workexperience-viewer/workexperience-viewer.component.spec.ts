import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexperienceViewerComponent } from './workexperience-viewer.component';

describe('WorkexperienceViewerComponent', () => {
  let component: WorkexperienceViewerComponent;
  let fixture: ComponentFixture<WorkexperienceViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkexperienceViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkexperienceViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
