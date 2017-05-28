import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abilities-block',
  templateUrl: './abilities-block.component.html',
  styleUrls: ['./abilities-block.component.scss']
})
export class AbilitiesBlockComponent implements OnInit {

  @Input() for;
  @Input() des;
  @Input() con;
  @Input() int;
  @Input() sab;
  @Input() car;

  constructor() { }

  ngOnInit() {}

  abilityModifier(abilityScore) {
    var score = parseInt(abilityScore, 10);
    return Math.floor((score - 10) / 2);
  }

  formattedModifier(abilityModifier) {
    if (abilityModifier >= 0) {
      return '+' + abilityModifier;
    }
    // This is an en dash, NOT a "normal" dash. The minus sign needs to be more
    // visible.
    return '–' + Math.abs(abilityModifier);
  }

  abilityText(abilityScore) {
    return [String(abilityScore),
            ' (',
            this.formattedModifier(this.abilityModifier(abilityScore)),
            ')'].join('');
  }

}
