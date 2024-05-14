import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/projects/projects.service';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})
export class AssistantComponent implements OnInit {

  message!: string;

  constructor(private router:Router, private service: ProjectsService) { 
  }

  ngOnInit(): void {
    //     (function(d, m){
    //     var kommunicateSettings = 
    //         {"appId":"2a0fee240dfca78675265d3628d942ecc","popupWidget":true,"automaticChatOpenOnNavigation":true};
    //     var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    //     var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    //     (window as any).kommunicate = m; m._globals = kommunicateSettings;
    // })(document, (window as any).kommunicate || {});
  }

  navigateTo(route: string, number?: number) {
    if (number) {
      this.service.changeNumber(number);
    }
    this.router.navigate([`${route}`]);
  }


}
