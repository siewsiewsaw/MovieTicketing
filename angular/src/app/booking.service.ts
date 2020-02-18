import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  moviedetails = new BehaviorSubject<any>([])
  
  constructor(private http: HttpClient) { }
  
  getBooking(){
    return this.http.get('http://localhost:8080/booking');
  }

  getMovieByBooking(){
    return this.http.get("http://localhost:8080/movies/5/bookings")
  }
}
