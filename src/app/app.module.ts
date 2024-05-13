import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { ComponentsModule } from './components/components.module';
import { ProjectsModule } from './projects/projects.module';
import { MicroProjectsModule } from './micro-projects/micro-projects.module';

@NgModule({
  declarations: [		
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    LandingModule,
    ProjectsModule,
    MicroProjectsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
