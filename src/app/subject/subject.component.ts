import {Component, inject, OnInit} from '@angular/core';
import {GradeComponent} from "../grade/grade.component";
import {NgForOf, NgIf} from "@angular/common";
import {SemesterComponent} from "../semester/semester.component";
import {round} from "../../lib";
import {allSubjects, allSubjectsName} from "../../const";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [
    GradeComponent,
    NgForOf,
    NgIf,
    SemesterComponent
  ],
  templateUrl: './subject.component.html'
})
export class SubjectComponent implements OnInit{
  semesters: number[][] = [[]];
  sum = 0;
  average = 0;
  upgrade = 0;
  subjectNumber = 0;

  private route = inject(ActivatedRoute);

  ngOnInit() {
    const semesterName = this.route.snapshot.paramMap.get('subject') // get the parameter from the url
    if (semesterName) this.subjectNumber = allSubjects.indexOf(semesterName);
  }

  updateAverage($event: number[]) {
    this.sum -= $event[0];
    this.sum += $event[1];
    const old_average = this.average;
    this.average = round(this.sum / this.semesters.filter(a => a.length > 0).length, 0.5)
    this.upgrade = round((this.average - old_average)*100);
  }

  subjectName() {
    return allSubjectsName[this.subjectNumber];
  }
}
