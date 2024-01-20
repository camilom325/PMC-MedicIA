import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  currentSection!: number;
  fullPagesDiv!: HTMLElement;
  totalHeight!: number;
  focusSection: string | undefined;

  constructor(private elementRef: ElementRef, private service: ProjectsService) { }
  
  ngOnInit() {
    this.currentSection = 1;
    this.fullPagesDiv = this.elementRef.nativeElement.querySelector('.fullPages');
    this.totalHeight = this.fullPagesDiv.scrollHeight - this.fullPagesDiv.clientHeight;
    this.service.currentNumber.subscribe(number => {
      this.scrollToSection(number);
    });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
  }

 @HostListener('scroll', ['$event'])
 onScroll() {
    this.checkScroll();
  }

  private checkScroll() {

  const scrollPercentage = Math.min((this.fullPagesDiv.scrollTop / this.totalHeight) * 100, 100);
  const roundedPercentage = Math.round(scrollPercentage);

  switch (true) {
    case roundedPercentage < 25:
      this.currentSection = 1;
      break;
    case roundedPercentage < 50:
      this.currentSection = 2;
      break;
    case roundedPercentage < 75:
      this.currentSection = 3;
      break;
    default:
      this.currentSection = 4;
  }
    
    AOS.refresh();
}

  scrollToSection(sectionNumber: number) {
    const section = document.querySelector(`.section-${sectionNumber}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

   navigateTo(url: string): void {
    window.open(url, '_blank');
  }

}
