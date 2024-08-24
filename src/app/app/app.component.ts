import { Component } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [CalculatorComponent],
  template: `
  <h1>Calculadora</h1>
  <app-calculator (result)="onResultCaluculated($event)"></app-calculator>
  <div *ngIf="result !== null">
    <h2>Resultado: {{ result }}</h2>
  </div>
`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  result: number | null = null;

  onResultCaluculated(result: number) {
    this.result = result;
  }
}
