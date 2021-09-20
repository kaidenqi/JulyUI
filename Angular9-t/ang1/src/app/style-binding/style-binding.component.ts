import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h2 [style.color]="'orange'">Angular 9 App</h2>
    <h2 [style.color]="hasError ? 'orange' : 'red'">Angular 9 App</h2>
    <h2 [style.color]="highlightColor">Angular 9 App</h2>
  `,
  styles: []
})
export class StyleBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public hasError = false
  public highlightColor = "blue"

}
