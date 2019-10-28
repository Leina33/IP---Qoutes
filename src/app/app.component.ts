import { Component } from '@angular/core';
import { Qoutes } from './qoutes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  qoutes:Qoutes []= [
    {id:1, name:'No man is an Island'},
    {id:2,name:'The beauty of life is to love your self'},
    {id:3,name:'Karma is a bitch'},
    {id:4,name:'Choosing to be positive and having a grateful attitude is going to determine how you are going to live your life.'}

  ];
}
