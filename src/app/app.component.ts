import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Ana Beatriz';
  nascimento = 2001;
  counter = 0;
  //Implementando counter sem atribui-lo para a pag html
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 100);

  //Métodos
  getIdade() {
    return 2022 - this.nascimento;
  }

  getMinutos() {
    return Math.trunc(this.counter / 60); //pega só a parte inteira
  }

  getSegundos() {
    return Math.trunc(this.counter % 60); //pega o resto da divisão, o que sobra dos minutos
  }
}
