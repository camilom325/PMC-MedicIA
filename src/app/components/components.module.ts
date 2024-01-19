import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TerminalComponent } from './terminal/terminal.component';
import { FooterComponent } from './footer/footer.component';
import { OnProcessComponent } from './onProcess/onProcess.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    TerminalComponent,
    FooterComponent,
    OnProcessComponent
  ],
  exports: [
    NavbarComponent,
    TerminalComponent,
    FooterComponent,
    OnProcessComponent
  ]
})
export class ComponentsModule { }
