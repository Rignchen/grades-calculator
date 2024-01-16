import {Component, Input, OnInit, signal} from '@angular/core';
import {GradeComponent} from "./grade/grade.component";
import {NgForOf, NgIf} from "@angular/common";
import {SemesterComponent} from "./semester/semester.component";
import {average, round} from "../../lib";
import {allSubjectsName} from "../../const";
import {Subject} from "../grade-list.service";
import {AddSemesterComponent} from "./add-semester/add-semester.component";

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [
    GradeComponent,
    NgForOf,
    NgIf,
    SemesterComponent,
    AddSemesterComponent
  ],
  templateUrl: './subject.component.html'
})
export class SubjectComponent implements OnInit{
  @Input() subject!: Subject;
  @Input() subjectNumber!: number;

  sum: number = 0;
  subjectName!: string;

  upgrade = 0;

  updateAverage($event: number[]) {
    this.sum -= $event[0];
    this.sum += $event[1];
    const old_average = this.subject.average();
    this.subject.average.update(() => round(this.sum / this.subject.semesters.filter(a => a.grades().length > 0).length, 0.1));
    this.upgrade = round((this.subject.average() - old_average)*100);
  }

  ngOnInit() {
    this.subjectName = allSubjectsName[this.subjectNumber];

    this.subject.semesters.forEach((semester) => {
      const semesterGrades = semester.grades();
      if (semesterGrades.length === 0) return;

      let sum = 0;
      semesterGrades.forEach((grade) => sum += grade);
      this.sum += sum;
    });
  }

  protected readonly signal = signal;
}
