import {Component, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss']
})
export class NPCComponent {
  @ViewChild('sidenav') sidenav;
  isLargeScreen: boolean;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.TabletLandscape, Breakpoints.WebLandscape])
      .subscribe(result => {
        this.isLargeScreen = result.matches;
      });
  }

  logout() {}

}
