import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingComponent } from '../pending/pending.component';
import { DoneComponent } from './done/done.component';



@NgModule({
  declarations: [PendingComponent, DoneComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
