import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { OnProcessComponent } from './components/onProcess/onProcess.component';
import { MicroProjectsComponent } from './micro-projects/micro-projects.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'projects', component: ProjectsComponent,
    children: [
      { path: 'micro-projects', component: MicroProjectsComponent },
      { path: 'crud-app', component: OnProcessComponent },
      { path: 'jwt-auth', component: OnProcessComponent },
      { path: 'spotifyAPI', component: OnProcessComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
