import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies : any;

  constructor() {
    this.movies = [
      { title: "Avengers End Game",
    category: "Super Hero",
    duration : "03h02",
    image: "../../../assets/cover_movie/avengers-end-game.jpg"
      },
      { title: "AFTER Chapitre 1",
        category: "Romance",
        duration : "02h15",
        image: "../../../assets/cover_movie/after-chapitre-1.jpg"
      },
      { title: "La Dame Blanche",
        category: "Eprouvante",
        duration : "02h02",
        image: "../../../assets/cover_movie/la-dame-blanche.jpg"
      },
      { title: "Detective Pikachu",
        category: "Super Hero",
        duration : "02h32",
        image: "../../../assets/cover_movie/pokemon_detective_pikachu.jpg"
      },
      { title: "Dumbo",
        category: "Animation",
        duration : "1h52",
        image: "../../../assets/cover_movie/Dumbo.png"
      }
    ];
   }

  ngOnInit() {
  }

}
