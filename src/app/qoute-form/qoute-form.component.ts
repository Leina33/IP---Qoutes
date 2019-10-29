import { Component, OnInit } from '@angular/core';
import { Qoutes } from '../qoutes';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {

  newQoutes = new Qoutes(0,"","",new Date());
  constructor() { }

  ngOnInit() {
  }

}
