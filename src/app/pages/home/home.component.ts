import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: {
    username: string;
    age: number;
  }[] = [
    {
      username: 'brenda',
      age: 30,
    },
    {
      username: 'rachelle',
      age: 30,
    },
    {
      username: 'sally',
      age: 31,
    },
    ];
  
  currentUser: string | object = 'brenda';


  constructor() {}

  ngOnInit() {}
}
