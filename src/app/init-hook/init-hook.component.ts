import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-hook',
  templateUrl: './init-hook.component.html',
  styleUrls: ['./init-hook.component.css']
})
export class InitHookComponent implements OnInit {

  currency = 'EUR';
  rate: number;

  constructor(private http: HttpClient) {
    this.http.get<any>('https://api.exchangeratesapi.io/latest?base=USD')
      .subscribe( data => this.rate = data.rates[this.currency]);
  }

  ngOnInit(): void {
  }

}
