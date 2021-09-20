import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClick(myInput.value)">CLICK</button>
    <input #myInput type="text"/>
    {{message}}
  `,
  styles: [``]
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message = "initial msg"

  onClick(msg){
    this.message = msg;
  }

}
