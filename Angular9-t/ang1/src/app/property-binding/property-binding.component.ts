import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <h2>Welcome To Property Binding</h2>
    <input [id]="myId" type="text" value="John" />
    <input id="{{myId}}" type="text" value="John" />
    <input [disabled]="false" id="{{myId}}" type="text" value="John" />
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="John" />
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public myId = "testId"
  public isDisabled = false;

}
