import { Component, OnInit } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { Time } from '@angular/common';

@Component({
  selector: 'app-diffusion',
  templateUrl: './diffusion.component.html',
  styleUrls: ['./diffusion.component.scss']
})
export class DiffusionComponent implements OnInit {

  movie : string;
  seances : {[key: string]: Time};
  salles : {[key: string]: string};

  constructor() { }

  ngOnInit() {
  }

}
