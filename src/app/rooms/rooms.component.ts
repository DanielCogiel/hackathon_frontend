import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {


  constructor(private api:ApiService) {}

  selectRoom(value: number) {
    this.api.roomNumber=value;
  }
}
