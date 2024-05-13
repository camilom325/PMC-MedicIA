import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { OnProcessComponent } from './components/onProcess/onProcess.component';
import { MicroProjectsComponent } from './micro-projects/micro-projects.component';
import { RadiologiaComponent } from './components/Radiologia/Radiologia.component';
import { OncologiaComponent } from './components/Oncologia/Oncologia.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'educacion', component: ProjectsComponent,
  },
  {
    path: 'radiologia', component: RadiologiaComponent
  },
  {
    path: 'dermatologia', component: OnProcessComponent
  },
  {
    path: 'cardiologia', component: OnProcessComponent
  },
  {
    path: 'ortopedia', component: OnProcessComponent
  },
  {
    path: 'oncologia', component: OncologiaComponent
  },
  {
    path: 'neurologia', component: OnProcessComponent
  },
  {
    path: 'oftalmologia', component: OnProcessComponent
  },
  {
    path: 'gastroenterologia', component: OnProcessComponent
  },
  {
    path: 'educacion',
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
