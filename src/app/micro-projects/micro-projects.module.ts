import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicroProjectsComponent } from './micro-projects.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [MicroProjectsComponent],
  exports: [MicroProjectsComponent]
})
export class MicroProjectsModule { }
