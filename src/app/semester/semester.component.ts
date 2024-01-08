import {Component, Input, signal} from '@angular/core';
import {NgForOf} from "@angular/common";
import {GradeComponent} from "../grade/grade.component";
import {round} from "../../lib";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-semester',
  standalone: true,
  imports: [
    NgForOf,
    GradeComponent,
    FormsModule
  ],
  templateUrl: './semester.component.html'
})
export class SemesterComponent {
  @Input() semester!: number[];
  @Input('semester-number') semesterNumber!: number;
  sum: number = 1 + 2 + 3 + 4 + 5 + 6;
  newGrade!: number;

  addGrade(grade: number) {
    if (grade >= 1 && grade <= 6 && grade % 0.5 === 0) {
      this.semester.push(grade);
      this.sum += grade;
    }
  }

  protected readonly round = round;
}
