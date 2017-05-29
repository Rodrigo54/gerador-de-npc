import { Component, OnInit } from '@angular/core';
import { Npc } from './npc';

@Component({
  selector: 'app-npc-form',
  templateUrl: './npc-form.component.html',
  styleUrls: ['./npc-form.component.scss']
})
export class NpcFormComponent implements OnInit {
  title = 'app works!';
  dados = {} as Npc;

  constructor() { }

  ngOnInit() {
    this.fetch((data: Npc[]) => {
      this.dados = data[0];
      console.log(this.dados);
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

  onSubmit(dados){
    console.log(dados);
  }
}
