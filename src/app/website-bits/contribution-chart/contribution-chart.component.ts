import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contribution-chart',
  templateUrl: './contribution-chart.component.html',
  styleUrls: ['./contribution-chart.component.css']
})
export class ContributionChartComponent implements OnInit {
  charts: ContributionChartComponent[];
  sectionName;
  profileLink;
  chartAPI;
  chartCredits;

  // constructor() {
  // }
  constructor(sectionName: string, profileLink: string, chartAPI: string, chartCredit: string) {
    this.sectionName = sectionName;
    this.profileLink = profileLink;
    this.chartAPI = chartAPI;
    this.chartCredits = chartCredit;
  }

  ngOnInit() {
  }

  // ---- Github Chart Code ----
  getGithubChart() {
    return this.getGithubChartCredits() + this.chartAPI;
  }

  getGithubChartCredits() {
    return '<!--' + this.chartCredits + '-->';
  }

  //  --------------------------

  getName() {
    return this.sectionName;
  }

  generateCalendar() {
    return this.hookGithubLink(this.getGithubChart());
  }

  hookGithubLink(chart: string) {
    return '<a href"' + this.profileLink + '">' + chart + '</a>';
  }

  addChart(chart: ContributionChartComponent) {
    this.charts.push(chart);
  }


}
