import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/projects/projects.service';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})
export class AssistantComponent implements OnInit {

  constructor(private router:Router, private service: ProjectsService) { 
  }

    ngOnInit() {
    const video = document.getElementById('video-background') as HTMLVideoElement;
            if (video) {
                video.playbackRate = 0.1;
            }
  }

  navigateTo(route: string, number?: number) {
    if (number) {
      this.service.changeNumber(number);
    }
    this.router.navigate([`${route}`]);
  }

}
