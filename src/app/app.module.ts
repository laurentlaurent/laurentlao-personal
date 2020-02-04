import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopBarComponent} from './website-bars/top-bar/top-bar.component';
import {RouterModule} from '@angular/router';
import {BasePageComponent} from './website-pages/base-page/base-page.component';
import {MenuBarComponent} from './website-bars/menu-bar/menu-bar.component';
import {FooterBarComponent} from './website-bars/footer-bar/footer-bar.component';
import {GithubCalendarComponent} from './website-bits/github-calendar/github-calendar.component';
import {ContributionChartComponent} from './website-bits/contribution-chart/contribution-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BasePageComponent,
    MenuBarComponent,
    FooterBarComponent,
    GithubCalendarComponent,
    ContributionChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: BasePageComponent},
    ]), // End of Router Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
