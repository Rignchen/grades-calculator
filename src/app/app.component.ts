import {Component, Input, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SemesterComponent } from "./semester/semester.component";
import {GradeComponent} from "./grade/grade.component";
import {FormsModule} from "@angular/forms";
import {getSubject, round} from "../lib";
import {NavbarComponent} from "./navbar/navbar.component";
import {allSubjects} from "../const";
import {AverageListComponent} from "./average-list/average-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SemesterComponent, GradeComponent, FormsModule, NavbarComponent, AverageListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentSubject: number = 0;

  init() {
    // get the parameter from the url
    this.currentSubject = getSubject();
    // return an empty string so it won't display anything
    return ""
  }
}
