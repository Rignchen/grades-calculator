import {Component, Input, signal} from '@angular/core';
import {NgForOf} from "@angular/common";
import {GradeComponent} from "../grade/grade.component";
import {round} from "../../lib";

@Component({
  selector: 'app-semester',
  standalone: true,
  imports: [
    NgForOf,
    GradeComponent
  ],
  templateUrl: './semester.component.html'
})
export class SemesterComponent {
  @Input() semester!: number[];
  @Input('semester-number') semesterNumber!: number;
  sum: number = 0;

  addGrade() {
    let grade = 4;
    this.semester.push(grade);
    this.sum += grade;
  }

  protected readonly round = round;
}
