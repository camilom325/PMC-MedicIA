import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicroProjectsComponent } from './micro-projects.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MicroProjectsComponent],
  exports: [MicroProjectsComponent]
})
export class MicroProjectsModule { }
