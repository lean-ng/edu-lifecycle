import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor() { }

  ngAfterContentInit(): void {
  }
  ngAfterContentChecked(): void {
  }
  ngAfterViewInit(): void {
  }
  ngAfterViewChecked(): void {
  }

  ngOnInit(): void {
    console.log('Projection Init');
  }

  ngDoCheck(): void {
    console.log('Projection Check');
  }



}
