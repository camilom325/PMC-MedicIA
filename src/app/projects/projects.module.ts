import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
