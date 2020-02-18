import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService} from '../movies.service';


@Component({
  selector: 'app-seatview',
  templateUrl: './seatview.component.html',
  styleUrls: ['./seatview.component.css']
})
export class SeatviewComponent implements OnInit {
 
public movies;

  constructor(private route: ActivatedRoute, router: Router, private moviesService: MoviesService ) {}
   
  getMovie() {
    this.moviesService.getMovie().subscribe(
      movie => { this.movies = movie }      
      
    )}

    ngOnInit(): void {
      this.getMovie()
      console.log(this.movies);
    } 

    
}
