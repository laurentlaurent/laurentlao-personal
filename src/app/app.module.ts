import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopBarComponent} from './website-bars/top-bar/top-bar.component';
import {RouterModule} from '@angular/router';
import {TestPageComponent} from './website-pages/test-page/test-page.component';
import {MenuBarComponent} from './website-bars/menu-bar/menu-bar.component';
import {FooterBarComponent} from './website-bars/footer-bar/footer-bar.component';
import { ContributionChartViewerComponent } from './website-bits/contribution-chart-viewer/contribution-chart-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TestPageComponent,
    MenuBarComponent,
    FooterBarComponent,
    ContributionChartViewerComponent,
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
