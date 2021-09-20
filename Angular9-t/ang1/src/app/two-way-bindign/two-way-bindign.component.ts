import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-bindign',
  template: `
    <input type="text" [(ngModel)]="name" />
    {{name}}
  `,
  styles: [``]
})
export class TwoWayBindignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name = ""

}
