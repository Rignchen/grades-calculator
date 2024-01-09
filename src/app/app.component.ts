import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SemesterComponent } from "./semester/semester.component";
import {GradeComponent} from "./grade/grade.component";
import {FormsModule} from "@angular/forms";
import {round} from "../lib";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SemesterComponent, GradeComponent, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  semesters: number[][] = [[]];
  sum = 0;
  average = 0;

  updateAverage($event: number[]) {
    this.sum -= $event[0];
    this.sum += $event[1];
    this.average = round(this.sum / this.semesters.filter(a => a.length > 0).length, 0.5)
  }
}
