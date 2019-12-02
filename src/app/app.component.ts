import {
  Component,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  //修改全局样式
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}
