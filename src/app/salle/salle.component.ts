import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {

  name : string;
  nbPlaces : number;

  constructor() { }

  ngOnInit() {
  }

}
