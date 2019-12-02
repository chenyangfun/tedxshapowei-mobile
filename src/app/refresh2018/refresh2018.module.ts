import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Refresh2018RoutingModule } from "./refresh2018-routing.module";
import { Refresh2018Component } from "./refresh2018.component";
import { Refresh2018HomeComponent } from "./refresh2018-home/refresh2018-home.component";
import {
  MatSidenavModule,
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [Refresh2018Component, Refresh2018HomeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    Refresh2018RoutingModule,
    MatSidenavModule,
  ]
})
export class Refresh2018Module {}
