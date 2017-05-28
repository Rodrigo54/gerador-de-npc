import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureHeadingComponent } from './creature-heading.component';

describe('CreatureHeadingComponent', () => {
  let component: CreatureHeadingComponent;
  let fixture: ComponentFixture<CreatureHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatureHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatureHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
