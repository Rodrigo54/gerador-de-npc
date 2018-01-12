import { NpcService } from './npc.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NPCComponent } from './npc.component';

import { SharedModule } from './../shared/shared.module';
import { NPCRoutingModule } from './npc.routing.module';
import { NpcFormComponent } from './npc-form/npc-form.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    NPCRoutingModule,
    SharedModule,
    LayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    FormsModule
  ],
  declarations: [NPCComponent, NpcFormComponent],
  providers: [NpcService]
})
export class NPCModule {}
