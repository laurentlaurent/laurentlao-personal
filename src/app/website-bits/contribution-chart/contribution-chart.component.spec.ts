import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContributionChartComponent} from './contribution-chart.component';

describe('ContributionChartComponent', () => {
  let component: ContributionChartComponent;
  let fixture: ComponentFixture<ContributionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContributionChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
