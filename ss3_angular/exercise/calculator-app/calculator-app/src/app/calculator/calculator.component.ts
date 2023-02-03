import {Component, OnInit} from '@angular/core';
import {Calculation} from "../model/calculation";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculation: Calculation = {
    firstValue: '',
    operator: '',
    secondValue: '',
    result: 0,
    error:''
  };

  constructor() {
  }

  ngOnInit(): void {
  }


  calculate(firstValue: string, operator: string, secondValue: string) {
    switch (operator) {
      case '+':
        this.calculation.result = parseFloat(firstValue) + parseFloat(secondValue);
        break;
      case '-':
        this.calculation.result = parseFloat(firstValue) - parseFloat(secondValue);
        break;
      case '*':
        this.calculation.result = parseFloat(firstValue) * parseFloat(secondValue);
        break;
      case '/':
        if (parseFloat(secondValue) == 0) {
          // @ts-ignore
          this.calculation.result="không thể chia cho 0"
          break;
        }
        this.calculation.result = parseFloat(firstValue) / parseFloat(secondValue);
        break;
    }
  }
}
