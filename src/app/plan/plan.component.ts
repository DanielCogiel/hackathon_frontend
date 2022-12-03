import { Time } from '@angular/common';
import { Component } from '@angular/core';

export interface PeriodicElement {
  day: string;
  time: number;
  eventName: string;
  tag: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { day: 'Monday', time: 8.00, eventName: "Swimming", tag: "aquatics"},
  { day: 'Monday', time: 10.00, eventName: "Swimming", tag: "aquatics"},
];

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {

  displayedColumns: string[] = ['day','time', 'eventName', 'tag'];
  dataSource = ELEMENT_DATA;
  

  yourRoom: Number = 200;
}
