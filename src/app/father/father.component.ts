import { Component } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {
  result: number | null=null;

  onResultCaluculated(resultado:number){
    this.result=resultado;
  }
}
