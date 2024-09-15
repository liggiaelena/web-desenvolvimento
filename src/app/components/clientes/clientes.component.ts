import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes: Cliente[] = [];

  onCalculate(form: NgForm) {
    console.log(form.value.id, form.value.nome, form.value.email, form.value.idade);
    const novoCliente = new Cliente(form.value.id, form.value.nome, form.value.email, form.value.idade)

    this.clientes.push(novoCliente);
    form.reset();
  }

}
