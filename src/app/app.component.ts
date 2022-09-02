import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Ana Beatriz';
  nascimento = 2001;

  //Método
  getIdade() {
    return 2022 - this.nascimento;
  }
}
