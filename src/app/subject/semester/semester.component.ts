import {Component, computed, EventEmitter, Input, OnInit, Output, Signal, WritableSignal} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {GradeComponent} from "../grade/grade.component";
import {round} from "../../../lib";
import {FormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {Semester} from "../../grade-list.service";

@Component({
  selector: 'app-semester',
  standalone: true,
  imports: [
    NgForOf,
    GradeComponent,
    FormsModule,
    NgIf,
    InputComponent
  ],
  templateUrl: './semester.component.html'
})
export class SemesterComponent implements OnInit {
  @Input() semester!: Semester;
  @Input('semester-number') semesterNumber!: number;
  @Output() averageChange = new EventEmitter<number[]>();

  ngOnInit() {
    this.semester.average = computed(() => {
      const semesterGrades = this.semester.grades();
      if (semesterGrades.length == 0) return 0;
      let sum = 0;
      semesterGrades.forEach((grade) => sum += grade);
      return round(sum / semesterGrades.length, 0.5);
    });
  }

  addGrade(grade: number) {
    this.semester.grades.update((grades) => {
      grades = [...grades, grade];
      return grades;
    });
  }
}
