import {Component, computed, Input, OnInit, signal} from '@angular/core';
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

  subjectName!: string;

  upgrade = 0;
  oldAverage!: number;

  ngOnInit() {
    this.subjectName = allSubjectsName[this.subjectNumber];
    this.actualiseAutoAverageUpdate()
    this.oldAverage = this.subject.average()
  }
  actualiseAutoAverageUpdate() {
    this.subject.average = computed(() => {
      const newAverage = round(average(this.subject.semesters.map((semester) => semester.average()), true), 0.1)
      this.upgrade = (newAverage / this.oldAverage - 1) * 100
      return newAverage
    })
  }
}
