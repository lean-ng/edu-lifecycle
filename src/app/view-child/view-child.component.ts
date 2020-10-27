import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('View Child Init');
  }

  ngDoCheck(): void {
    console.log('View Child Check');
  }

}
