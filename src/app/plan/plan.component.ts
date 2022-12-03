import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Event } from '../event';





@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {

  events: Event[] = [];
  displayedColumns: string[] = ['day','time', 'eventName', 'tag'];
  dataSource: any;
  yourRoom: Number = 200;

  constructor (private api: ApiService) {}

  ngOnInit(): void {
    this.api.getEvents().subscribe(
      data =>{ 
        this.events = data;
        this.dataSource= this.events
      },
      error => { console.log(error)}
    )

    
  }


}
