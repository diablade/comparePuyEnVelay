import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCompareComponent } from './top-compare.component';

describe('TopCompareComponent', () => {
  let component: TopCompareComponent;
  let fixture: ComponentFixture<TopCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
