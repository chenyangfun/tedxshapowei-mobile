import { Component, ViewChild, Renderer2, ElementRef, ChangeDetectorRef, ViewEncapsulation } from "@angular/core";
import Swiper from "swiper";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  //修改全局样式
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  aboutTedSwiper: Swiper;
  public slides = [
    "First slide",
    "Second slide",
    "Third slide",
  ];

  constructor(private ref: ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.aboutTedSwiper = new Swiper(".swiper-container", {
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      centeredSlides : true,
      loop : true,
      autoplay:true,
      // slidesOffsetBefore : 100,
      slidesOffsetAfter : 100,
    });
    this.ref.detectChanges();
  }
}
