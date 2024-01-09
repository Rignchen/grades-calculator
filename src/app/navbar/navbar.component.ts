import {Component, Input} from '@angular/core';
import {NavLinkComponent} from "./nav-link/nav-link.component";
import {allSubjects} from "../../const";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavLinkComponent
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() currentSubject!: number;
  protected readonly allSubjects = allSubjects;
}
