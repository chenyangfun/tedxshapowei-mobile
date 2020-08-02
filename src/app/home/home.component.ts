import { Component, ChangeDetectorRef, ViewEncapsulation } from "@angular/core";
import Swiper from "swiper";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  //修改全局样式
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  aboutTedSwiper: Swiper;
  mainPageTedSwiper: Swiper;
  public slides = ["First slide", "Second slide", "Third slide"];
  public windowInnerHeight = window.innerHeight;
  showAboutTed = false;
  showHome = false;
  constructor(private ref: ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.aboutTedSwiper = new Swiper(".swiper-container", {
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      centeredSlides: true,
      loop: true,
      autoplay: false,
      slidesOffsetAfter: 100
    });
    this.mainPageTedSwiper = new Swiper(".main-page-swiper-container", {
      direction: "vertical",
      height: this.windowInnerHeight
    });
  }
}
