import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  qoutes:string[];

  constructor(){
    this.qoutes = ['Never Give up', 'Karma is a bitch', 'Imagination is more important than knowledge']
  } 
}
