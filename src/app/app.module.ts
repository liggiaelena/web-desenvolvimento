import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from './components/media/media.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ApoliceComponent } from './components/apolice/apolice.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    CalculadoraComponent,
    ClientesComponent,
    ApoliceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
