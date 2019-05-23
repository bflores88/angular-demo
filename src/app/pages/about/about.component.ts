import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.services';

interface MoviesResponse {
  title: string;
  year: number;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  movies: {
    title: string;
    year: number;
  }[] = [];

  newMovieData: {
    title: string;
    year: number;
  } = {
    title: '',
    year: 2000,
  };
  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.backend.getMovies().then((data: MoviesResponse[]) => {
      console.log(data);
      this.movies = data;
    });
  }

  submit() {
    const { title, year } = this.newMovieData;
    this.backend.createMovie(title, year).then((data: MoviesResponse[]) => {
      this.movies = data;
    });
  }
}
