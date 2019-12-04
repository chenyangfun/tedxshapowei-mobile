import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Refresh2018Component } from "./refresh2018.component";
import { Refresh2018HomeComponent } from "./refresh2018-home/refresh2018-home.component";
import { Refresh2018EventReviewComponent } from "./refresh2018-event-review/refresh2018-event-review.component";
import { Refresh2018EventVideoComponent } from './refresh2018-event-video/refresh2018-event-video.component';
import { Refresh2018EventTeamComponent } from './refresh2018-event-team/refresh2018-event-team.component';
import { Refresh2018EventPartnerComponent } from './refresh2018-event-partner/refresh2018-event-partner.component';
import { Refresh2018EventContactComponent } from './refresh2018-event-contact/refresh2018-event-contact.component';

const routes: Routes = [
  {
    path: "refresh2018",
    component: Refresh2018Component,
    children: [
      {
        path: "eventreview",
        component: Refresh2018EventReviewComponent
      },
      {
        path: "eventvideo",
        component: Refresh2018EventVideoComponent
      },
      {
        path: "eventteam",
        component: Refresh2018EventTeamComponent
      },
      {
        path: "eventpartner",
        component: Refresh2018EventPartnerComponent
      },
      {
        path: "contactus",
        component: Refresh2018EventContactComponent
      },
      {
        path: "",
        component: Refresh2018HomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Refresh2018RoutingModule {}
