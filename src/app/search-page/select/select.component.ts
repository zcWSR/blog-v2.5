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
import { observable, computed, action } from 'mobx-angular';

@Component({
  selector: 'app-select',
  template: `
  <div #ref class="select" [class.active]="show" (click)="show = true" *mobxAutorun>
    <div class="label">{{ selectedOption.name }}</div>
    <i class="fa fa-angle-down"></i>
    <div class="option-container">
      <ng-container *ngIf="show">
        <div
          class="option"
          *ngFor="let o of (options | withKey)"
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
  @observable show = false;
  @observable @Input() options = [];
  @Output() selected = new EventEmitter<{}>();

  @computed
  get selectedOption() {
    return this.options.find(item => item.active) || this.options[0] || {};
  }

  @action('select')
  select(index, event) {
    event.cancelBubble = true;
    this.options.forEach(item => item.active = false);
    this.options[index].active = true;
    this.show = false;
    this.selected.emit(this.options[index]);
  }

  constructor() { }

  ngOnInit() {
    window.addEventListener('click', e => {
      if (e.target !== this.ref.nativeElement) {
       this.show = false;
      }
    });
  }
}
