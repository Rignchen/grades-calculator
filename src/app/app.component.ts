import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SemesterComponent } from "./subject/semester/semester.component";
import {GradeComponent} from "./subject/grade/grade.component";
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "./navbar/navbar.component";
import {AverageListComponent} from "./average-list/average-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SemesterComponent, GradeComponent, FormsModule, NavbarComponent, AverageListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentSubject: number = 0;
  subjects= new allSubject();
}

export class allSubject {
  maths = new Subject();
  societe = new Subject();
  anglais = new Subject();
  epsic = new Subject();
  cie = new Subject();
  tpi: number = 0;
}
class Subject {
  semesters: number[][] = [[]]
  average!: number
  constructor(average: number = 0) {
    this.average = average
  }
}
