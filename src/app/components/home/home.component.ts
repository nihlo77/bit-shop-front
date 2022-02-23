import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 leagues = [
    {
      name: "MLB",
      users: "35.234"
          },
    {
      name: "NHL",
      users: "10.020"
    },
    {
      name: "NBA",
      users: "56.983"
    },
    {
      name: "NFL",
      users: "102.521"
    },
    {
      name: "MLS",
      users: "6.892"
    },
    {
      name: "UEFAchamp",
      users: "89.276"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
