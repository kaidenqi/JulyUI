import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-department-list',
  template: `
   <h2>Deparment List</h2>
   <ul class="items">
     <li (click)="onSelect(department)" [class.selected]=isSelected(department) *ngFor="let department of departments">
      <span class="badge">{{department.id}}</span> {{department.name}}
     </li>
   </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  public departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"NodeJS"},
    {"id":3, "name":"ReactJS"},
    {"id":4, "name":"BootStrap"},
    {"id":5, "name":"NextJS"},
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(department){
    // this.router.navigate(['/departments',department.id])
    this.router.navigate([department.id], {relativeTo:this.route})
  }

  isSelected(department){
    return department.id === this.selectedId
  }

}
