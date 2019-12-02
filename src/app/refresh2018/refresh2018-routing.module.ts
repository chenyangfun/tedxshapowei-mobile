import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Refresh2018Component } from "./refresh2018.component";
import { Refresh2018HomeComponent } from "./refresh2018-home/refresh2018-home.component";

const routes: Routes = [
  {
    path: "refresh2018",
    component: Refresh2018Component,
    children: [
      {
        path: "",
        component: Refresh2018HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Refresh2018RoutingModule {}
