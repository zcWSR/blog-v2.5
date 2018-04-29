import { Component, OnInit } from '@angular/core';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer-flat">
    <div class="copyright">
        <div class="container">
            <a target="_blank" href="{{ appStore.footerLink }}">{{ appStore.footer }}</a>
        </div>
    </div>
  </footer>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public appStore: AppStore
  ) { }

  ngOnInit() {
  }

}
