import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBlockComponent } from './property-block.component';

describe('PropertyBlockComponent', () => {
  let component: PropertyBlockComponent;
  let fixture: ComponentFixture<PropertyBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
