import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  movies = [{'title': 'test'}]
  selectedMovie;

  constructor(private api:ApiService) {
    this.getMovies();
    this.selectedMovie = {id: -1, title: "", description: "", year: ""};
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        this.movies = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  movieClicked = (movie: any) => {
    this.api.getOneMovie(movie.id).subscribe(
      data => {
        this.selectedMovie = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  putButtonClicked = () => {
    this.api.updateMovie(this.selectedMovie).subscribe(
      data => {
        this.selectedMovie = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  postButtonClicked = () => {
    this.api.addMovie(this.selectedMovie).subscribe(
      data => {
        this.selectedMovie = data;
        this.movies.push(data)
      }, error => {
        console.log(error);
      }
    );
  }

  deleteButtonClicked = () => {
    this.api.deleteMovie(this.selectedMovie.id).subscribe(
      data => {
        this.getMovies();
      }, error => {
        console.log(error);
      }
    )
  }
}
