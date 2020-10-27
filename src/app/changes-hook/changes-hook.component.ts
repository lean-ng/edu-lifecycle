import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changes-hook',
  templateUrl: './changes-hook.component.html',
  styleUrls: ['./changes-hook.component.css']
})
export class ChangesHookComponent implements OnInit, OnChanges {

  @Input()
  count = 0;

  @Input()
  base: string;

  @Input()
  secondary = 0;

  @Input()
  set third(value: number) {
    // console.log('Third set');
    this.thirdDoubled = value * 2;
  }

  doubledCount: number;
  doubledSecondary: number;
  thirdDoubled = 0;

  constructor() {

  }

  trippledCount(): number {
    // console.log('Triple the count');
    return this.count * 3;
  }

  // Wird immer getriggert, falls sich eine Input-Property ändert
  // (auch initial beim ersten Setzen der Property)
  // Oft eingesetzt um von Inputs abhängige Berechnungen durchzuführen
  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);

    if (changes.base) {
      console.log('base change');
    }

    if (changes.count) {
      this.doubledCount = this.count * 2;
    }

    if (changes.secondary) {
      this.doubledSecondary = this.secondary * 2;
    }
  }

  ngOnInit(): void {

  }


}
