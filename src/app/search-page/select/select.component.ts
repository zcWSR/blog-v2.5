import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  ViewChild,
  ElementRef,
  Output,
  Input
} from '@angular/core';
import {
  transition,
  style,
  trigger,
  animate,
  state
} from '@angular/animations';
import { SelectStore } from './select.store';

@Component({
  selector: 'app-select',
  template: `
  <div #ref class="select" [class.active]="store.show" (click)="store.show = true" *mobxAutorun>
    <div class="label">{{ store.label }}</div>
    <i class="fa fa-angle-down"></i>
    <div class="option-container">
      <ng-container *ngIf="store.show">
        <div
          class="option"
          *ngFor="let o of (store.options | withKey)"
          [class.active]="o.value.active"
          [@toggleOption]
          (click)="select(o.key, $event)"
        >{{ o.value.name }}</div>
      </ng-container>
    </div>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./select.component.scss'],
  providers: [SelectStore],
  animations: [
    trigger('toggleOption', [
      transition(':enter', [
        style({ height: 0, paddingTop: 0, paddingBottom: 0 }),
        animate(
          '.2s ease-in-out',
          style({ height: '*', paddingTop: '*', paddingBottom: '*' })
        )
      ]),
      transition(':leave', [
        style({ height: '*', paddingTop: '*', paddingBottom: '*' }),
        animate(
          '.2s ease-in-out',
          style({ height: 0, paddingTop: 0, paddingBottom: 0 })
        )
      ])
    ])
  ]
})
export class SelectComponent implements OnInit {
  @ViewChild('ref') ref: ElementRef;
  @Input('options')
  get options() {
    return this.store.options;
  }
  set options(o) {
    this.store.options = o;
  }
  @Output() selected = new EventEmitter<{}>();
  constructor(
    private store: SelectStore
  ) { }

  ngOnInit() {
    window.addEventListener('click', e => {
      if (e.target !== this.ref.nativeElement) {
       this.store.show = false;
      }
    });
  }

  select(index, event?) {
    if (event) {
      event.cancelBubble = true;
    }
    this.store.select(index);
    this.selected.emit(this.options[index]);
  }
}
