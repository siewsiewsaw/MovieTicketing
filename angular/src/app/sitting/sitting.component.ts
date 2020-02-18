import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-sitting',
  templateUrl: './sitting.component.html',
  styleUrls: ['./sitting.component.css']
})
export class SittingComponent implements OnInit {

  public bookings;
  public moviebookings;
  
  constructor(private bookingService: BookingService) { }

  getBooking() {
    this.bookingService.getBooking().subscribe(
      booking => { this.bookings = booking }      
      
    )}

  getMovieByBooking() {
    this.bookingService.getMovieByBooking().subscribe(
      moviebooking => { this.moviebookings = moviebooking}
    )}
  

    ngOnInit(): void {
      this.getBooking();
      this.getMovieByBooking();
      console.log(this.getBooking())
    } 
  

}
