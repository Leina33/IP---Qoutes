import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Qoutes } from '../qoutes';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {

  newQoutes = new Qoutes(0,"","",new Date());
  @Output() addQoutes = new EventEmitter<Qoutes>();
  constructor() { }
  submitQoutes(){
    this.addQoutes.emit(this.newQoutes);
    // this.newquote = new Quotes("","","",0,0,new Date());
  }

  ngOnInit() {
  }

}
