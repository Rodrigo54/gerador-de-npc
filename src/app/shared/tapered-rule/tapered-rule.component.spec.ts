import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaperedRuleComponent } from './tapered-rule.component';

describe('TaperedRuleComponent', () => {
  let component: TaperedRuleComponent;
  let fixture: ComponentFixture<TaperedRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaperedRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaperedRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
