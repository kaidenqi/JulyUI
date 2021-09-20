import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-deparment-detail',
  template: `
    <h3>You selected dpartment with id = {{departmentId}}</h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>

    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DeparmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'))
    // this.departmentId = id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    })
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments(){
    let slectedId = this.departmentId ? this.departmentId:null;
    // this.router.navigate(['/departments', {id:slectedId, val:"John"}]);
    // http://localhost:4200/departments-list/1
    this.router.navigate(['../', {id:slectedId}], {relativeTo:this.route})
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo:this.route})
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo:this.route})
  }


}
