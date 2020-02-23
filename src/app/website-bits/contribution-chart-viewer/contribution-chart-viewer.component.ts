import { Component, OnInit } from '@angular/core';
import { ContributionChart} from '../../interface-types/contribution-chart';
import { CONTRIBUTION_CHARTS} from '../../content/ContributionCharts/ContributionCharts.content';
import {ArrayType} from '@angular/compiler';

@Component({
  selector: 'app-contribution-chart-viewer',
  templateUrl: './contribution-chart-viewer.component.html',
  styleUrls: ['./contribution-chart-viewer.component.scss']
})
export class ContributionChartViewerComponent implements OnInit {
  charts: ContributionChart[];

  constructor() {
    this.charts = CONTRIBUTION_CHARTS;
  }

  ngOnInit() {
  }

}
