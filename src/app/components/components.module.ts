import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TerminalComponent } from './terminal/terminal.component';
import { FooterComponent } from './footer/footer.component';
import { OnProcessComponent } from './onProcess/onProcess.component';
import { RadiologiaComponent } from './Radiologia/Radiologia.component';
import { OncologiaComponent } from './Oncologia/Oncologia.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    TerminalComponent,
    FooterComponent,
    OnProcessComponent,
    RadiologiaComponent,
    OncologiaComponent
  ],
  exports: [
    NavbarComponent,
    TerminalComponent,
    FooterComponent,
    OnProcessComponent,
    RadiologiaComponent,
    OncologiaComponent
  ]
})
export class ComponentsModule { }
