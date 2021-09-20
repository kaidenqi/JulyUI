// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-class-binding',
//   template: `<h2 class="text-success">Welcome to Class Binding</h2>
//             <h2 [class]="successClass">Welcome to Class Binding</h2>
//             <h2 class="text-special" [class]="successClass" >Welcome to Class Binding</h2>
//             <h2 [class.text-danger]="hasError">Welcome to Class Binding</h2>
//             <h2 [ngClass]="messageClass">Welcome to Class Binding</h2>`,
//   styles: [`
//     .text-success{
//       color:green;
//     },
//     .text-danger{
//       color:red;
//     },
//     .text-special{
//       font-style:italic;
//     }
//   `]
// })
// export class ClassBindingComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

//   public successClass = "text-success"
//   public hasError = true;
//   public isSpecial = true;

//   public messageClass = {
//     "text-success": !this.hasError,
//     "text-danger":this.hasError,
//     "text-special":this.isSpecial
//   }

// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <div class="container">
    <h3>Child Component</h3>
    <h4 class="text-success">HELLO WORLD</h4>
    <h4 [class]="successClass">HELLO WORLD</h4>
    <h4 class="text-special" [class]="successClass">HELLO WORLD</h4>
    <h4 [class.text-danger]="hasError">HELLO WORLD</h4>
    <h4 [ngClass]="messageClasses">HELLO WORLD</h4>
  </div>
  `,
  styles: [
    `
        .text-success {
          color:green
        }
        .text-danger{
          color:red
        }
        .text-special{
          font-style:italic
        }
    `
  ]
})
export class ClassBindingComponent implements OnInit {

  public successClass = "text-success"
  public isSpecial = false
  public hasError = true;
 
  public messageClasses = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":!this.isSpecial
  }


  constructor() { }

  ngOnInit(): void {
  }

}

