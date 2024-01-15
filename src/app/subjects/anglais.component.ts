import { Component } from '@angular/core';
import {SubjectComponent} from "../subject/subject.component";
import {GradeListService} from "../grade-list.service";

@Component({
  standalone: true,
  imports: [
    SubjectComponent
  ],
  templateUrl: './generic.component.html'
})
export class AnglaisComponent {
  subject = GradeListService.subjects.anglais;
  subjectNumber = 3;
}
