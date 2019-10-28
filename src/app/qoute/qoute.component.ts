import { Component, OnInit } from '@angular/core';
import {Qoutes} from '../qoutes';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {

  qoutes:Qoutes []  = [
    {id:1, name:'Martin Luther king',description:'No man is an Island'},
    {id:2,name:'Unknown', description:'The beauty of life is to love your self'},
    {id:3,name:'Kenfric Lemar',description:'Karma is a bitch'},
    {id:4,name:'Joel Osteen',description:'Choosing to be positive and having a grateful attitude is going to determine how you are going to live your life'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
