import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import Swiper from "swiper";

@Component({
  selector: "app-refresh2018-event-video",
  templateUrl: "./refresh2018-event-video.component.html",
  styleUrls: ["./refresh2018-event-video.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class Refresh2018EventVideoComponent {
  constructor() {}

  videoSwiper: Swiper;
  ngAfterViewInit() {
    this.videoSwiper = new Swiper(".swiper-container", {
      spaceBetween: 30,
      slidesPerView: 2,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      loop: true,
      autoplay: false,
    });
  }
}
