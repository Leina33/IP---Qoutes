import { Component, OnInit } from '@angular/core';
import {Qoutes} from '../qoutes';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {

  qoutes:Qoutes []  = [
    {id:1, name:'No man is an Island'},
    {id:2,name:'The beauty of life is to love your self'},
    {id:3,name:'Karma is a bitch'},
    {id:4,name:'Choosing to be positive and having a grateful attitude is going to determine how you are going to live your life.'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
