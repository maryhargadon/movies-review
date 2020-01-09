import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[];

  constructor() {
    this.movies = [
      new Movie("1917", "action", 2019),
      new Movie("Little Women", "drama", 2019)
    ];
   }

  ngOnInit() {
  }

}
