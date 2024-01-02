import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    TerminalComponent
  ],
  exports: [
    NavbarComponent,
    TerminalComponent
  ]
})
export class ComponentsModule { }
