import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/projects/projects.service';

@Component({
  selector: 'app-Oncologia',
  templateUrl: './Oncologia.component.html',
  styleUrls: ['./Oncologia.component.css']
})
export class OncologiaComponent implements OnInit {

  presentationText: string;

  constructor(private router:Router, private service: ProjectsService) { 
    this.presentationText = "Hi, I’m Camilo! A systems engineering student at the Universidad de Los Andes, specialized in software development. \n\nI'm proactive and passionate about learning new technologies, skilled at Java as well as many other programming languages, especially skilled in Java working with SpringBoot 🌱 as a backend framework with SQL and mongoDB. In addition, I work with frontend frameworks such as React ⚛️ and Angular 🅰️ along with HTML, JS, TS and CSS. I'm open to learning any new technologies that complement these frameworks and tools. \n\nIn addition, I have the foundations of Google Cloud Platform (GCP) ☁️, and currently being trained to acquire the necessary skills to use the platform in the most efficient way possible. \n\nWho am I? \n\n • Curious\n • Collaborative and committed\n • Sports lover\n • Travel enthusiast";
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
