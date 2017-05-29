import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NpcFormComponent } from './npc-form/npc-form.component';
import { NPCComponent } from './npc.component';

const routes: Routes = [
  // { path: '', component: NPCComponent },
  { path: 'edit', component: NpcFormComponent },
  { path: '', redirectTo: 'edit', pathMatch:"full" },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NPCRoutingModule {}
