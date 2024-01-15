import { Component } from '@angular/core';
import {SubjectComponent} from "../subject/subject.component";
import {GradeListService} from "../grade-list.service";

@Component({
  selector: 'app-cie',
  standalone: true,
  imports: [
    SubjectComponent
  ],
  templateUrl: './generic.component.html'
})
export class CieComponent {
  subject = GradeListService.subjects.cie;
  subjectNumber = 6;
}
