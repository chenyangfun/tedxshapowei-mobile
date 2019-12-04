import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-refresh2018-event-review',
  templateUrl: './refresh2018-event-review.component.html',
  styleUrls: ['./refresh2018-event-review.component.scss'],
  //修改全局样式
  encapsulation: ViewEncapsulation.None
})
export class Refresh2018EventReviewComponent {

  constructor() { }
  reviewSwiper: Swiper;
  ngAfterViewInit() {
    this.reviewSwiper = new Swiper(".swiper-container", {
      spaceBetween: 25,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      loop: true,
      autoplay: false,
    });
  }

}
