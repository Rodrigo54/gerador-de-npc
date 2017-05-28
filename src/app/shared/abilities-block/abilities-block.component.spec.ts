import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesBlockComponent } from './abilities-block.component';

describe('AbilitiesBlockComponent', () => {
  let component: AbilitiesBlockComponent;
  let fixture: ComponentFixture<AbilitiesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilitiesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
