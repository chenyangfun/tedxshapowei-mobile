import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Refresh2018RoutingModule } from "./refresh2018-routing.module";
import { Refresh2018Component } from "./refresh2018.component";
import { Refresh2018HomeComponent } from "./refresh2018-home/refresh2018-home.component";
import { MatSidenavModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Refresh2018EventReviewComponent } from "./refresh2018-event-review/refresh2018-event-review.component";
import { Refresh2018EventVideoComponent } from './refresh2018-event-video/refresh2018-event-video.component';
import { Refresh2018EventTeamComponent } from './refresh2018-event-team/refresh2018-event-team.component';
import { Refresh2018EventPartnerComponent } from './refresh2018-event-partner/refresh2018-event-partner.component';
import { Refresh2018EventContactComponent } from './refresh2018-event-contact/refresh2018-event-contact.component';

@NgModule({
  declarations: [
    Refresh2018Component,
    Refresh2018HomeComponent,
    Refresh2018EventReviewComponent,
    Refresh2018EventVideoComponent,
    Refresh2018EventTeamComponent,
    Refresh2018EventPartnerComponent,
    Refresh2018EventContactComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    Refresh2018RoutingModule,
    MatSidenavModule
  ]
})
export class Refresh2018Module {}
