import {Component, OnInit} from '@angular/core';
import {ContributionChartComponent} from '../contribution-chart/contribution-chart.component';

@Component({
  selector: 'app-github-calendar',
  templateUrl: '../contribution-chart/contribution-chart.component.html', // Template from Contribution Chart
  styleUrls: ['./github-calendar.component.css'],
})

export class GithubCalendarComponent extends ContributionChartComponent implements OnInit {

  constructor() {
    super(
      'GitHub Calendar',
      'https://github.com/laurentlaurent',
      '<img src="http://ghchart.rshah.org/laurentlaurent" alt="laurentlaurent\'s github chart"/>',
      'Github Calendar from rshah. (Github link: https://github.com/2016rshah/githubchart-api)');

  }

  ngOnInit() {

  }

}
