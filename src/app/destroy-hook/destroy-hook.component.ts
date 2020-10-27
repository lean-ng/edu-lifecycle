import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-destroy-hook',
  templateUrl: './destroy-hook.component.html',
  styleUrls: ['./destroy-hook.component.css']
})
export class DestroyHookComponent implements OnInit, OnDestroy {

  time: Date;

  constructor() { }

  private timer: any;
  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}
