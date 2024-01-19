import {Component} from '@angular/core';
import {NavLinkComponent} from "./nav-link/nav-link.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavLinkComponent
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {}
