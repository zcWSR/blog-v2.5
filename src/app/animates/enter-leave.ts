import { transition, style, trigger, animate, state } from '@angular/animations';

export const enterLeave = trigger('enterLeave', [
  state('*', style({ opacity: 1 })),
  transition('void => *', [
    style({ opacity: 0 }),
    animate('.3s ease-in-out')
  ]),
  transition('* => void', [
    animate('.3s ease-in-out', style({ opacity: 0 }))
  ])
]);