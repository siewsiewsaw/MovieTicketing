import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService} from '../movies.service';


@Component({
  selector: 'app-seatview',
  templateUrl: './seatview.component.html',
  styleUrls: ['./seatview.component.css']
})
export class SeatviewComponent implements OnInit {
 

  buttons = [
    { 
      title: "Spiderman",
      path: "/mainpage2/sitting",
    },
  ]
  
  constructor(private route: ActivatedRoute, router: Router, private moviesService: MoviesService ) {}

   ngOnInit() {
    return this.moviesService.getMovie(); 
    console.log(this.moviesService.getMovie())
  }


}
