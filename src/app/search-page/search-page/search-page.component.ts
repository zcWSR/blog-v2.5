import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
    
  }

}
