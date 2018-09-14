import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WatchedMoviesService {

  private moviesIds: Array<number>;

  constructor(private _http: Http) {

  }

  public init(): void {

    this._http.get('assets/movies-data/watched-movies-ids.json')
      .map((res) => res.json())
      .subscribe(data => {
        this.moviesIds = data.movies;
      }, (rej) => { console.error("Could not load local data", rej) });

  }

  public checkIfWatched(movieId: number): boolean {
    if (this.moviesIds.indexOf(movieId) !== -1) {
      return true;
    } else {
      return false;
    }
  }

}

