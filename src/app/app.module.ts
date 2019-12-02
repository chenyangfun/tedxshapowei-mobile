import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { Refresh2018Module } from './refresh2018/refresh2018.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, Refresh2018Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
