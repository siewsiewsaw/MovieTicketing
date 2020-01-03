import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 buttons = [
    { 
      title: "Seat",
      path: "mainpage2/seatview",
    },
  ]


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
