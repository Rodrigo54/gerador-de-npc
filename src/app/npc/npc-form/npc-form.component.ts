import { NpcService } from './../npc.service';
import { Component, OnInit } from '@angular/core';
import { Npc } from './npc';

@Component({
  selector: 'app-npc-form',
  templateUrl: './npc-form.component.html',
  styleUrls: ['./npc-form.component.scss']
})
export class NpcFormComponent implements OnInit {
  dados = {};

  constructor(
    private service: NpcService,
  ) { }

  ngOnInit() {
    this.service.getNPC(1)
             .subscribe((data) => {
               console.log(data);
                this.dados = data;
              });
  }

  onSubmit(dados) {
    console.log(dados);
  }
}
