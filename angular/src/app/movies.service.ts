import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  moviedetails = new BehaviorSubject<any>([])
  constructor(private http: HttpClient) { }
  
  getMovie(){
    this.http.get("http://localhost:8080/movies").subscribe((moviedetails) => {
    
      this.moviedetails.next(moviedetails)
      console.log(moviedetails)
    })
  }
}
