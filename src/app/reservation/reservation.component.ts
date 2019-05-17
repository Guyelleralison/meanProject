import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  movie : string;
  salle : string;
  time : Time;
  placeNumbers : Array<string>;
  clientName : string;

  constructor() { }

  ngOnInit() {
  }

}
