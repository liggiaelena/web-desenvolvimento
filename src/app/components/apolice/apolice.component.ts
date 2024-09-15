import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {
  valor: number = 0;

  onCalculate(form: NgForm) {
    const nome = form.value.nome;
    const sexo = form.value.sexo;
    const idade = parseInt(form.value.idade, 10);
    const valorCarro = parseFloat(form.value.carro);

    switch (sexo) {
      case 'mas':
        if (idade <= 25) {
          this.valor = valorCarro * 0.15;
        } else {
          this.valor = valorCarro * 0.10;
        }
        break;
      case 'fem':
        this.valor = valorCarro * 0.08;
        break;
      default:
        this.valor = 0;
    }
  }
}
