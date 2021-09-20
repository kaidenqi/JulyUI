import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives2',
  template: `
    <div [ngSwitch]="color">
      <div [style.color]="'blue'" *ngSwitchCase="'blue'">U Picked Blue Color</div>
      <div [style.color]="'red'" *ngSwitchCase="'red'">U Picked Red Color</div>
      <div [style.color]="'orange'" *ngSwitchCase="'orange'">U Picked Orange Color</div>
      <div *ngSwitchDefault>Pick Again</div>
    </div>
    <div *ngFor="let color of colors; even as f">
      <h2>{{f}} {{color}}</h2>
    </div>
  `,
  styles: []
})
export class Directives2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public color = "green"

  public colors = ["red","green","blue","orange"]

}
