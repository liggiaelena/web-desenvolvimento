import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  media: number = 0;

  onCalculate(form: any) {
    const n1 = parseFloat(form.value.n1);
    const n2 = parseFloat(form.value.n2);
    const operation = form.value.operation;

    switch (operation) {
      case 'add':
        this.media = n1 + n2;
        break;
      case 'sub':
        this.media = n1 - n2;
        break;
      case 'mult':
        this.media = n1 * n2;
        break;
      case 'div':
        if (n2 !== 0) {
          this.media = n1 / n2;
        } else {
          this.media = NaN;
        }
        break;
      default:
        this.media = NaN;
    }
  }
}
