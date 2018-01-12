import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'npc-box',
  templateUrl: './npc-box.component.html',
  styleUrls: ['./npc-box.component.scss']
})
export class NpcBoxComponent implements OnInit {

  @Input('data') dados;

  constructor() { }

  ngOnInit() {
  }

}
