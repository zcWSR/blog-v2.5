import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  transition,
  style,
  trigger,
  animate,
  state
} from '@angular/animations';
import { Router } from '@angular/router';

import { AppStore } from '../../app.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('showHideTitle', [
      transition(':enter', [
        style({ marginTop: '100%' }),
        animate('.3s ease-in-out', style({ marginTop: 0 }))
      ]),
      transition(':leave', [
        style({ marginTop: 0 }),
        animate('.3s ease-in-out', style({ marginTop: '100%' }))
      ])
    ]),
    trigger('toggleMenu', [
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
export class HeaderComponent implements OnInit {
  @ViewChild('menuBtn') menuBtnRef: ElementRef;
  @ViewChild('menuIcon') menuIconRef: ElementRef;
  showDropdownMenu = false;

  showTitle() {
    return ;
  }
  constructor(public appStore: AppStore, private router: Router) {}

  toggleDropdownMenu() {
    this.showDropdownMenu = !this.showDropdownMenu;
  }

  ngOnInit() {
    window.addEventListener('click', e => {
      if (
        e.target === this.menuIconRef.nativeElement ||
        e.target === this.menuBtnRef.nativeElement
      ) {
        this.toggleDropdownMenu();
      } else {
        this.showDropdownMenu = false;
      }
    });
  }

  onSearch(form, event) {
    event.preventDefault();
    const searchValue = form.search.value;
    if (searchValue) {
      this.router.navigate(['search', 'post', searchValue]);
    }
    form.search.value = '';
  }

  backToHome() {
    this.router.navigate(['/']);
    window.location.hash = '#top';
  }
}
