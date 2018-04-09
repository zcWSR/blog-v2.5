import { Component, OnInit } from '@angular/core';
import { CoreStore } from '../core.store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private coreStore: CoreStore
  ) { }

  ngOnInit() {
  }

}
