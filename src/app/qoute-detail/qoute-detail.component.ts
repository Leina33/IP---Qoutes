import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Qoutes } from '../qoutes';

@Component({
  selector: 'app-qoute-detail',
  templateUrl: './qoute-detail.component.html',
  styleUrls: ['./qoute-detail.component.css']
})
export class QouteDetailComponent implements OnInit {

  @Input()qoute:Qoutes;
  @Output() isComplete = new EventEmitter<boolean>();

  qouteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  


  ngOnInit() {
  }

}
