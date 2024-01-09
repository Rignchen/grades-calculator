import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {GradeComponent} from "../grade/grade.component";
import {round} from "../../lib";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-semester',
  standalone: true,
  imports: [
    NgForOf,
    GradeComponent,
    FormsModule,
    NgIf
  ],
  templateUrl: './semester.component.html'
})
export class SemesterComponent {
  @Input() semester!: number[];
  @Input('semester-number') semesterNumber!: number;
  @Output() averageChange = new EventEmitter<number[]>();
  average = 0;
  sum: number = 0;
  newGrade!: number;

  addGrade(grade: number) {
    if (grade >= 1 && grade <= 6 && grade % 0.5 === 0) {
      this.semester.push(grade);
      this.sum += grade;
      const old_average = this.average;
      this.average = round(this.sum / this.semester.length, 0.5);
      this.averageChange.emit([old_average, this.average]);
    }
  }

  protected readonly round = round;
}
