import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name = "John Wick"

  public date = new Date();

  user = {
    userId:20,
    firstName:"John",
    lastName:"Wick",
    DOB:'09/24/2021',
    city:"New York"
  }

  users = [
    {
    userId:20,
    firstName:"John",
    lastName:"Wick",
    DOB:'09/24/2021',
    city:"New York"
   },
   {
    userId:220,
    firstName:"John",
    lastName:"Wick",
    DOB:'09/24/2021',
    city:"Bangalore"
   }
]

}
