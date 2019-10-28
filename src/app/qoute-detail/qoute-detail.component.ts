import { Component, OnInit, Input } from '@angular/core';
import { Qoutes } from '../qoutes';

@Component({
  selector: 'app-qoute-detail',
  templateUrl: './qoute-detail.component.html',
  styleUrls: ['./qoute-detail.component.css']
})
export class QouteDetailComponent implements OnInit {

  @Input()qoute:Qoutes;

  constructor() { }

  ngOnInit() {
  }

}
