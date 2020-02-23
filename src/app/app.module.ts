import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopBarComponent} from './website-bars/top-bar/top-bar.component';
import {RouterModule} from '@angular/router';
import {TestPageComponent} from './website-pages/test-page/test-page.component';
import {NavBarComponent} from './website-bars/menu-bar/nav-bar.component';
import {FooterBarComponent} from './website-bars/footer-bar/footer-bar.component';
import { ContributionChartViewerComponent } from './website-bits/contribution-chart-viewer/contribution-chart-viewer.component';
import { WorkexperienceViewerComponent } from './website-bits/workexperience-viewer/workexperience-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TestPageComponent,
    NavBarComponent,
    FooterBarComponent,
    ContributionChartViewerComponent,
    WorkexperienceViewerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: TestPageComponent},
    ]), // End of Router Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
