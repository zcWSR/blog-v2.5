import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallJumbotronComponent } from './small-jumbotron.component';

describe('SmallJumbotronComponent', () => {
  let component: SmallJumbotronComponent;
  let fixture: ComponentFixture<SmallJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
