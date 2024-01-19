import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private router: Router) { }
  
  navigateTo(route: string) {
    this.router.navigate([`${route}`]);
  }

}
