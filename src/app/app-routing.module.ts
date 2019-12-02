import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Refresh2018Component } from "./refresh2018/refresh2018.component";

const routes: Routes = [
  // { path: "refresh2018", component: Refresh2018Component },
  { path: "", component: HomeComponent } //首页
  // {path:'**',component:code404}//配置404页面
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
