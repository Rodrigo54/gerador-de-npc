import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss']
})
export class NPCComponent implements OnInit {
  title = 'app works!';
  dados: object = {};

  constructor() { }

  ngOnInit() {
    this.fetch((data) => {
      this.dados = data[0];
      console.log(data);
    });

  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/monsters.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
