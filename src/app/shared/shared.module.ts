import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { CreatureHeadingComponent } from './creature-heading/creature-heading.component';
import { TopStatsComponent } from './top-stats/top-stats.component';
import { TaperedRuleComponent } from './tapered-rule/tapered-rule.component';
import { PropertyLineComponent } from './property-line/property-line.component';
import { AbilitiesBlockComponent } from './abilities-block/abilities-block.component';
import { PropertyBlockComponent } from './property-block/property-block.component';
import { NpcBoxComponent } from './npc-box/npc-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StatBlockComponent,
    CreatureHeadingComponent,
    TopStatsComponent,
    TaperedRuleComponent,
    PropertyLineComponent,
    AbilitiesBlockComponent,
    PropertyBlockComponent,
    NpcBoxComponent
  ],
  exports: [
    StatBlockComponent,
    CreatureHeadingComponent,
    TopStatsComponent,
    PropertyLineComponent,
    AbilitiesBlockComponent,
    PropertyBlockComponent,
    NpcBoxComponent
  ]
})
export class SharedModule { }
