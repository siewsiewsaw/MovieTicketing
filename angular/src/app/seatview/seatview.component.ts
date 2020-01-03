import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
