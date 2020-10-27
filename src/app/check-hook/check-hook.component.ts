import { Component, DoCheck, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-check-hook',
  templateUrl: './check-hook.component.html',
  styleUrls: ['./check-hook.component.css']
})
export class CheckHookComponent implements OnInit, DoCheck {

  doubledCount = 0;

  constructor(public svc: CounterService) { }

  // Hook wird immer(!) ausgeführt, wenn Angular in irgendeiner
  // Form Änderungen auf den Komponenten erwartet
  //
  // Komponente sollte die ihre relevanten Daten prüfen
  // und eventuell Neu-Berechnungen durchführen
  private oldValue = 0;

  ngDoCheck(): void {
    console.log('Check Hook');
    if (this.svc.count !== this.oldValue) {
      this.doubledCount = this.svc.count * 2;
      this.oldValue = this.svc.count;
    }
  }

  ngOnInit(): void {

  }

}
