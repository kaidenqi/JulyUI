import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents = []
  constructor(private _eventService: EventService,
    private _route:Router) { }

  ngOnInit(): void {
    this._eventService.getSpecialEvents()
    .subscribe(
      res => this.specialEvents = res,
      //if the token varification fails in the BACEND
      //then FRONT END redirects to login
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401)
          {
              this._route.navigate(['/login'])
          }
          if(err.status === 500)
          {
              this._route.navigate(['/login'])
          }
        }
      }
    )
  }

}
