import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  media: number = 0;
  aprovado: string = ""

  onCalculate(form: NgForm) {
    console.log(form.value.ac1, form.value.ac2, form.value.ag, form.value.af);
    this.media = (form.value.ac1 * 0.15) + (form.value.ac2 * 0.30) + (form.value.ag * 0.10) + (form.value.af * 0.45);
    if (this.media >= 5) {
      this.aprovado = "Aprovado";
    }else{
      this.aprovado = "Reprovado";
    }
  }
}
