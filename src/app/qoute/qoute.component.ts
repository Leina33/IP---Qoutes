import { Component, OnInit } from "@angular/core";
import { Qoutes } from "../qoutes";

@Component({
  selector: "app-qoute",
  templateUrl: "./qoute.component.html",
  styleUrls: ["./qoute.component.css"]
})
export class QouteComponent implements OnInit {
  qoutes: Qoutes[] = [
    new Qoutes(1, "Martin Luther King", "No man is an Island"),
    new Qoutes(2, "Barack Obama", "Yes you you can"),
    new Qoutes(3, "Joel Osteen", "Believe in you can do it!"),
    new Qoutes(4, "Unknown", "Karma is a bitch"),
    new Qoutes(5, "Activists", "You can people but you cannot finish ideas")
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
