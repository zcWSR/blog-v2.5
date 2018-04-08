import { Component, OnInit } from '@angular/core';
import { CoreStore } from '../core.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private coreStore: CoreStore
  ) {
    
  }

  ngOnInit() {
  }

}
