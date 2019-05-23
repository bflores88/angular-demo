import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) { }
  
  getMovies(): Promise<object> {
    return this.http.get('/api/movies').toPromise();
  }

  createMovie(title: string, year: number): Promise<object> {
    const newMovie = { title, year };
    return this.http.post('/api/movies', newMovie).toPromise();
  }

  register(data) {
    return this.http.post('/api/register', data).toPromise();
  }

  login(data) {
    return this.http.post('/api/login', data).toPromise();
  }

  logout() {
    return this.http.get('/api/logout').toPromise();
  }


}