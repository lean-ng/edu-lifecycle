import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-hook',
  templateUrl: './init-hook.component.html',
  styleUrls: ['./init-hook.component.css']
})
export class InitHookComponent implements OnInit {

  @Input()
  currency = 'USD';

  private internalRate: number;

  rate: number;
  // get rate(): number {
  //   console.log('Rate gelesen');
  //   return this.internalRate;
  // }
  // set rate(value: number) { this.internalRate = value; }

  constructor(private http: HttpClient) {

    // Logged noch nicht das Live-Input
    console.log(this.currency);

    // Normalerweise im Konstruktor kaum Code
    // Code gehört in den Init-Hook falls er initialisieren
    // Charakter hat
  }

  // Initiale Aktionen der Komponente
  // Insbesondere sind eventuelle Input-Werte erst hier live
  ngOnInit(): void {
    this.http.get<any>('https://api.exchangeratesapi.io/latest?base=USD')
      .subscribe(data => {
        console.log(this.currency);
        this.rate = data.rates[this.currency];
      }
   );
  }

}
