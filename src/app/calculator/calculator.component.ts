import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  value_first: number = 0;
  value_second: number = 0;

  operation: string = 'sum';

  @Output() result = new EventEmitter<number>();

  calculate() {
    let result: number;
    switch (this.operation) {
      case 'sum':
        result = this.value_first + this.value_second;
        break;
      default:
        result = 0;
        break;
    }
    this.result.emit(result);
  }
}
