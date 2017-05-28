import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyLineComponent } from './property-line.component';

describe('PropertyLineComponent', () => {
  let component: PropertyLineComponent;
  let fixture: ComponentFixture<PropertyLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
