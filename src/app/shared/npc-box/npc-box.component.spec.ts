import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcBoxComponent } from './npc-box.component';

describe('NpcBoxComponent', () => {
  let component: NpcBoxComponent;
  let fixture: ComponentFixture<NpcBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
