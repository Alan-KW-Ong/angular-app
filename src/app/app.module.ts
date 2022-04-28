import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { InfoAlertComponent } from './info-alert/info-alert.component';
import { Ass1Component } from './ass1/ass1.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment3SolutionComponent } from './assignment3-solution/assignment3-solution.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ParagraphComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    InfoAlertComponent,
    Ass1Component,
    Assignment3Component,
    Assignment3SolutionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
