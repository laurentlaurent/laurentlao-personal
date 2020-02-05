import { Component, OnInit } from '@angular/core';
import {ContributionChart} from '../contribution-chart';
import {ArrayType} from '@angular/compiler';

@Component({
  selector: 'app-contribution-chart-viewer',
  templateUrl: './contribution-chart-viewer.component.html',
  styleUrls: ['./contribution-chart-viewer.component.css']
})
export class ContributionChartViewerComponent implements OnInit {
  charts: ContributionChart[] = [];

  constructor() {
  }

  ngOnInit() {
    this.addChart(
      'GitHub Calendar',
      'https://github.com/laurentlaurent',
      '<img src="http://ghchart.rshah.org/laurentlaurent" alt="laurentlaurent\'s github chart"/>',
      'Github Calendar from rshah. (Github link: https://github.com/2016rshah/githubchart-api)'
    );
  }

  addChart(sectionName: string, profileLink: string, chartAPI: string, chartCredits: string) {
    this.charts.push(new ContributionChart(sectionName, profileLink, chartAPI, chartCredits));
  }

}
