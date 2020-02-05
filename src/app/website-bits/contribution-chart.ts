export class ContributionChart {
  constructor(private theSectionName: string, private theProfileLink: string, private theChartAPI: string, private theChartCredit: string) {

  }

  // ---- Github Chart Code ----
  getGithubChart() {
    return this.getGithubChartCredits() + this.theChartAPI;
  }

  getGithubChartCredits() {
    return '<!--' + this.theChartCredit + '-->';
  }

  //  --------------------------

  getName() {
    return this.theSectionName;
  }

  generateCalendar() {
    return this.hookGithubLink(this.getGithubChart());
  }

  hookGithubLink(chart: string) {
    return '<a href"' + this.theProfileLink + '">' + chart + '</a>';
  }

}
