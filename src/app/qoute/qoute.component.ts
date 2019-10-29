import { Component, OnInit } from "@angular/core";
import { Qoutes } from "../qoutes";

@Component({
  selector: "app-qoute",
  templateUrl: "./qoute.component.html",
  styleUrls: ["./qoute.component.css"]
})
export class QouteComponent implements OnInit {
  qoutes: Qoutes[] = [
    new Qoutes(1, "Martin Luther King", "No man is an Island",new Date(2020,3,14)),
    new Qoutes(2, "Barack Obama", "Yes you you can",new Date(2019,7,14 )),
    new Qoutes(3, "Joel Osteen", "Believe in you can do it!",new Date(2019,5,14 )),
    new Qoutes(4, "Unknown", "Karma is a bitch",new Date(201,2,14 )),
    new Qoutes(5, "Activists", "You can people but you cannot finish ideas",new Date(2019,2,10 )),
  ];
  toggleDetails(index) {
    this.qoutes[index].showDescription = !this.qoutes[index].showDescription;
  }

  completeQoute(isComplete, index){
    if (isComplete) {
      this.qoutes.splice(index,1);
    }
  }


  constructor() {}

  ngOnInit() {}
}
