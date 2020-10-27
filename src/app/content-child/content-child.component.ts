import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Content Child Init');
  }

  ngDoCheck(): void {
    console.log('Content Child Check');
  }

}
