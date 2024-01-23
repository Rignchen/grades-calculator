import {Component, Input, OnInit} from '@angular/core';
import {GradeComponent} from "./semester/grade/grade.component";
import {NgForOf, NgIf} from "@angular/common";
import {SemesterComponent} from "./semester/semester.component";
import {GradeListService, Subject} from "../../grade-list.service";
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

  ngOnInit() {
    this.subjectName = ["Mathematiques", "Societe", "Anglais", "Modules EPSIC", "Modules CIE"][this.subjectNumber];
    GradeListService.currentSubject = this.subjectNumber;
    GradeListService.debug.subject_change++;
  }
}
