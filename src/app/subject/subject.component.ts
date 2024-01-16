import {Component, inject, Input, OnInit, signal} from '@angular/core';
import {GradeComponent} from "./grade/grade.component";
import {NgForOf, NgIf} from "@angular/common";
import {SemesterComponent} from "./semester/semester.component";
import {round} from "../../lib";
import {allSubjects, allSubjectsName} from "../../const";
import {ActivatedRoute} from "@angular/router";
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

  sum!: number;
  subjectName!: string;

  upgrade = 0;

  updateAverage($event: number[]) {
    this.sum -= $event[0];
    this.sum += $event[1];
    const old_average = this.subject.average;
    this.subject.average = round(this.sum / this.subject.semesters.filter(a => a.length > 0).length, 0.1)
    this.upgrade = round((this.subject.average - old_average)*100);
  }

  ngOnInit() {
    this.subjectName = allSubjectsName[this.subjectNumber];

    this.sum = 0;
    this.subject.semesters.forEach((semester) => {
      const semesterGrades = semester();
      if (semesterGrades.length === 0) return;

      let sum = 0;
      semesterGrades.forEach((grade) => sum += grade);
      this.sum += round(sum / semesterGrades.length,0.5);
    });
  }

  protected readonly signal = signal;
}
