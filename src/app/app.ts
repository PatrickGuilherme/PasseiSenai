import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraPage } from "./pages/calculadora.page/calculadora.page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculadoraPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('passei-mais');
}
