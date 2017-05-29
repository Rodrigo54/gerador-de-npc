import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NPCComponent } from './npc.component';

import { SharedModule } from './../shared/shared.module';
import { NPCRoutingModule } from './npc.routing.module';
import { NpcFormComponent } from './npc-form/npc-form.component';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdCardModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NPCRoutingModule,
    SharedModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdTabsModule,
    MdInputModule,
    FormsModule
  ],
  declarations: [NPCComponent, NpcFormComponent]
})
export class NPCModule { }
