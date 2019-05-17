import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  title:string;
  duration:string;
  image:string;
  release:Date;

  constructor() { }

  ngOnInit() {
  }

}
