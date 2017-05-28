import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStatsComponent } from './top-stats.component';

describe('TopStatsComponent', () => {
  let component: TopStatsComponent;
  let fixture: ComponentFixture<TopStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
