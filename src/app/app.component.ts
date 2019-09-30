import { Component } from '@angular/core';

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>Greetings!</h1>
  <p>{{myFirstGreet}}</p>
  <ns-races></ns-races>
  `
})
export class AppComponent {
  title = 'ponyracer';
  numberOfUsers = 146;
  myFirstGreet : string = "Hello World";
}
