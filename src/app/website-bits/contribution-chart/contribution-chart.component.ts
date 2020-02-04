import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contribution-chart',
  templateUrl: './contribution-chart.component.html',
  styleUrls: ['./contribution-chart.component.css']
})

export class ContributionChartComponent implements OnInit {
  sectionName: string;
  profileLink: string;
  chartAPI: string;
  chartCredits: string;

  constructor(theSectionName: string, theProfileLink: string, theChartAPI: string, theChartCredit: string) {
    this.sectionName = theSectionName;
    this.profileLink = theProfileLink;
    this.chartAPI = theChartAPI;
    this.chartCredits = theChartCredit;
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


}
