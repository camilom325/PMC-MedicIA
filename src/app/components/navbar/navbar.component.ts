import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  mostrar: boolean = false;

  constructor(private router: Router) { }
  
  navigateTo(route: string) {
    this.router.navigate([`${route}`]);
    this.mostrar = !this.mostrar;
  }

  mostrarDiv() {
    this.mostrar = !this.mostrar;
  }

}
