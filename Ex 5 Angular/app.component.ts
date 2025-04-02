import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inrAmount: number = 0;
  exchangeRate: number = 0.012; // Example: 1 INR = 0.012 USD

  get usdAmount(): number {
    return this.inrAmount * this.exchangeRate;
  }
}
