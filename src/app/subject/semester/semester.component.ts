import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {GradeComponent} from "../grade/grade.component";
import {round} from "../../../lib";
import {FormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";

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
  @Input() semester!: number[];
  @Input('semester-number') semesterNumber!: number;
  @Output() averageChange = new EventEmitter<number[]>();
  average = 0;
  sum: number = 0;

  ngOnInit() {
    if (this.semester.length > 0) {
      this.semester.forEach((grade) => this.sum += grade);
      this.average = round(this.sum / this.semester.length, 0.5);
    }
  }

  addGrade(grade: number) {
    this.semester.push(grade);
    this.sum += grade;
    const old_average = this.average;
    this.average = round(this.sum / this.semester.length, 0.5);
    this.averageChange.emit([old_average, this.average]);
  }
}
