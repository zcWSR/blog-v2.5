import { Component, OnInit, Input } from '@angular/core';
import { transition, style, trigger, animate, state } from '@angular/animations';

@Component({
  selector: 'app-loading',
  template: `
  <div class="loading-container">
    <div class="spinner">
      <div class="item-wrapper">
          <div class="item"></div>
      </div>
      <div class="item-wrapper">
          <div class="item"></div>
      </div>
      <div class="item-wrapper">
          <div class="item"></div>
      </div>
      <div class="item-wrapper">
          <div class="item"></div>
      </div>
    </div>
  </div>
  `
})
export class LoadingComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
