import { Component } from '@angular/core';
import { trigger, animate, style, query, transition } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':leave', [
      style({ opacity: 1 }),
      animate('.5s ease-in-out', style({ opacity: 0 }))
    ],
      { optional: true }
    ),
  ])
]);
@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
      <main [@routerTransition]="getState(o)">
        <router-outlet #o="outlet"></router-outlet>
      </main>
    <app-footer></app-footer>`,
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition
  ]
})
export class AppComponent {
  title = 'app';
  getState(outlet: RouterOutlet): any {
    return outlet.activatedRouteData.animation;

  }
}

