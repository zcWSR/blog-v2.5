import { Component } from '@angular/core';
import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    // query(':enter, :leave', style({ opacity: 1 }), { optional: true }),
    // query(':enter', [
    //   style({ opacity: .5 }),
    //   animate('.5s ease-in-out', style({ opacity: 1 }))
    //   ],
    //   { optional: true }
    // ),
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
  getState(outlet) {
    return outlet.activatedRouteData.animation;

  }
}

