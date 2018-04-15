import { transition, style, trigger, animate, state } from '@angular/animations';

export function enterLeave() {
  return trigger('enterLeave', [
    state('*', style({ opacity: 1 })),
    state('initial', style({ opacity: 0, transform: 'translateY(10px)' })),
    state('ready', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('void => *', [
      style({ opacity: 0 }),
      animate(`.3s ease-in-out`)
    ]),
    transition('* => void', [
      animate(`.3s ease-in-out`)
    ]),
    transition('initial => ready', [
      animate(`.3s linear`)
    ])
  ]);
}
