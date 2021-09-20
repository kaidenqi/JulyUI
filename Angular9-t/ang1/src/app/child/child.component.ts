import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Data from Child Component')
  }

}
