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
    { 
      title1: "Chart",
      path1: "mainpage2/profitchart",
    },
    { 
      title2: "Food",
      path2: "mainpage2/food",
    },
  ]


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
