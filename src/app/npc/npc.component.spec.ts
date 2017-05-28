import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPCComponent } from './npc.component';

describe('NPCComponent', () => {
  let component: NPCComponent;
  let fixture: ComponentFixture<NPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
